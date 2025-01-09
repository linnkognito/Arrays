import { useQuiz } from '../../contexts/QuizContext';
import Button from '../common/Button';
import styles from './StartScreen.module.css';

function StartScreen() {
  const { dispatch, numQuestions, SECONDS_PER_QUESTION: seconds } = useQuiz();

  return (
    <div className={styles.startScreen}>
      <h3>Welcome to the Array Quiz!</h3>
      <div className={styles.startContent}>
        <p>{`There's a total of ${numQuestions} questions, and you will have ${seconds} seconds to solve each one. Good luck! 🤞`}</p>

        <Button onClick={() => dispatch({ type: 'start' })}>
          Let's do it!
        </Button>
      </div>
    </div>
  );
}

export default StartScreen;
