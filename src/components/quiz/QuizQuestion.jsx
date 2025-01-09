import { useQuiz } from '../../contexts/QuizContext';
import Code from '../challenges/Code';
import styles from './QuizQuestion.module.css';

function QuizQuestion({ question }) {
  const { currentQuestion, index, answer, dispatch } = useQuiz();
  const hasAnswered = answer !== null;

  function setClass(id) {
    return answer === id
      ? currentQuestion.correctAnswer === id
        ? styles.correctAnswer
        : styles.wrongAnswer
      : styles.optionDisabled;
  }

  function renderFormattedQuestion(text) {
    const parts = text.split(/(`[^`]+`)/g);

    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return <Code key={index}>{part.slice(1, -1)}</Code>;
      }

      return part;
    });
  }

  return (
    <div className={styles.quizQuestion}>
      <h3>{`🕵️‍♀️ Question ${index + 1}`}</h3>
      <p className='px-2'>
        {renderFormattedQuestion(question?.question || '')}
      </p>

      <div className={styles.quizContainer}>
        {question?.answers.map((option) => (
          <div
            key={option.id}
            className={`transition-all ${
              !hasAnswered ? styles.option : setClass(option.id)
            }`}
            onClick={() =>
              hasAnswered
                ? ''
                : dispatch({ type: 'answerGiven', payload: option.id })
            }
          >
            <p className={styles.optionTitle}>
              <span className={styles.optionIndex}>{option.id}</span>
              {option.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default QuizQuestion;
