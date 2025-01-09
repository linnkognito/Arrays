import { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext();

const initialState = {
  status: 'loading',
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  newHighscore: false,
};

const SECONDS_PER_QUESTION = 30;

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
        newHighscore: false,
      };

    default:
      throw new Error('Action unknown');
  }
}

function QuizProvider({ children }) {
  const [{ status, questions, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const currentQuestion = questions.at(index);

  return (
    <QuizContext.Provider
      value={{
        status,
        questions,
        currentQuestion,
        numQuestions,
        SECONDS_PER_QUESTION,
        index,
        answer,
        points,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error('The Quiz Context was used outside of the QuizProvider');

  return context;
}

export { useQuiz, QuizProvider };
