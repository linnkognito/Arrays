import { useEffect } from 'react';
import { useQuiz } from '../../contexts/QuizContext';

import StartScreen from './StartScreen';
import Spinner from './Spinner';
import ErrorMessage from '../../pages/ErrorMessage';
import Progress from './Progress';
import QuizFooter from './QuizFooter';
import QuizQuestion from './QuizQuestion';
import FinishScreen from './FinishScreen';

function QuizContainer() {
  const {
    status,
    currentQuestion,
    numQuestions,
    index,
    answer,
    points,
    dispatch,
  } = useQuiz();
  const ENDPOINT = 'http://localhost:8000/questions';

  useEffect(
    function () {
      fetch(ENDPOINT)
        .then((res) => res.json())
        .then((data) => dispatch({ type: 'dataReceived', payload: data }))
        .catch((err) => dispatch({ type: 'dataFailed' }));
    },
    [dispatch]
  );

  return (
    <div className='min-w-[70%] max-w-[70%] flex items-center p-6 bg-offwhite border rounded'>
      {status === 'loading' && <Spinner />}
      {status === 'error' && <ErrorMessage />}
      {status === 'ready' && <StartScreen />}

      {status === 'active' && (
        <div className='flex flex-col gap-2 w-full'>
          <Progress
            numQuestions={numQuestions}
            index={index}
            answer={answer}
            points={points}
          />

          <QuizQuestion question={currentQuestion} />

          <QuizFooter />
        </div>
      )}

      {status === 'finished' && <FinishScreen />}
    </div>
  );
}

export default QuizContainer;
