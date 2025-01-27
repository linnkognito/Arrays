import { useEffect } from 'react';
import { useQuiz } from '../../contexts/QuizContext';

import styles from './QuizContainer.module.css';

import StartScreen from './StartScreen';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import Progress from './Progress';
import QuizQuestion from './QuizQuestion';
import QuizFooter from './QuizFooter';
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

  useEffect(() => {
    async function fetchQuizData() {
      try {
        const res = await fetch('/quizQuestions.json');

        if (!res.ok) throw new Error();

        const data = await res.json();

        dispatch({ type: 'dataReceived', payload: data.questions });
      } catch (err) {
        dispatch({ type: 'dataFailed' });
      }
    }

    fetchQuizData();
  }, [dispatch]);

  return (
    <div className={styles.quizContainer}>
      {status === 'loading' && <Spinner />}
      {status === 'error' && <ErrorMessage />}
      {status === 'ready' && <StartScreen />}

      {status === 'active' && (
        <div className={styles.quizContent}>
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
