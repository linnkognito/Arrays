import { useQuiz } from '../../contexts/QuizContext';
import Button from '../common/Button';
import styles from './FinishScreen.module.css';

function FinishScreen() {
  const { points, numQuestions, newHighscore, dispatch } = useQuiz();

  return (
    <div className={styles.finishScreen}>
      <h3>{newHighscore ? '🥳New highscore!' : '🚩Completed!'}</h3>

      <p>{`Your scored ${points} out of a total of ${numQuestions} points.`}</p>

      <Button
        className='button-full'
        onClick={() => dispatch({ type: 'reset', payload: points })}
      >
        Play again!
      </Button>
    </div>
  );
}

export default FinishScreen;
