import { useQuiz } from '../../contexts/QuizContext';
import Button from '../common/Button';
import styles from './StartScreen.module.css';

function StartScreen() {
  const { dispatch, numQuestions } = useQuiz();

  return (
    <div className={styles.startScreen}>
      <h3>Welcome to the Array Quiz!</h3>
      <div className={styles.startContent}>
        <p>{`You'll get a total of ${numQuestions} questions to test your array method knowledge. Good luck! 🤞`}</p>

        <Button onClick={() => dispatch({ type: 'start' })}>
          Let's do it!
        </Button>
      </div>
    </div>
  );
}

export default StartScreen;
