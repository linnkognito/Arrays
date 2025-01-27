import { createContext, useContext, useReducer } from 'react';
import quizQuestions from '../dev-data/quizQuestions.json';

const QuizContext = createContext();

const initialState = {
  status: 'loading',
  questions: quizQuestions,
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  newHighscore: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return { ...state, status: 'error' };

    case 'start':
      return { ...state, status: 'active' };

    case 'answerGiven':
      const question = state.questions.at(state.index);
      const answer = action.payload;

      return {
        ...state,
        answer,
        points:
          answer === question.correctAnswer ? state.points + 1 : state.points,
      };

    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };

    case 'finished':
      return {
        ...state,
        status: 'finished',
        newHighscore: state.points > state.highscore,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case 'reset':
      return {
        ...state,
        status: 'ready',
        questions: state.questions,
        index: 0,
        answer: null,
        points: 0,
      };

    default:
      throw new Error('Action unknown');
  }
}

function QuizProvider({ children }) {
  const [
    { status, questions, index, answer, points, highscore, newHighscore },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions?.length;

  return (
    <QuizContext.Provider
      value={{
        status,
        questions,
        numQuestions,
        index,
        answer,
        points,
        highscore,
        newHighscore,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);

  return context;
}

export { useQuiz, QuizProvider };
