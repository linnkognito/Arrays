import { useEffect, useReducer } from 'react';
import questions from '../dev-data/quiz-questions.json';

import StartScreen from './StartScreen';
import PageNav from '../components/PageNav';
import Spinner from '../components/Spinner';
import ErrorMessage from './ErrorMessage';
import Progress from '../components/Progress';
import Questions from './Questions';
import QuizFooter from '../components/QuizFooter';
import NextButton from '../components/NextButton';

const initialState = {
  status: 'loading',
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

const ENDPOINT = 'http://localhost:8000/questions';

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return { ...state, status: 'error' };

    case 'start':
      return { ...state, status: 'active' };

    default:
      throw new Error('Action unknown');
  }
}
function Quiz() {
  const [{ status, questions, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(function () {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => console.error({ type: 'dataFailed' }));
  }, []);

  return (
    <>
      <PageNav />

      <div className='bg-offwhite border rounded w-700'>
        {status === 'loading' && <Spinner />}
        {status === 'error' && <ErrorMessage />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              numQuestions={numQuestions}
              index={index}
              answer={answer}
              points={points}
            />
            <Questions />
            <QuizFooter>
              <NextButton />
            </QuizFooter>
          </>
        )}
      </div>
    </>
  );
}

export default Quiz;
