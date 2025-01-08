import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';

function QuizFooter() {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className='flex justify-end'>
      <Button
        onClick={() => dispatch({ type: 'nextQuestion' })}
        disabled={!hasAnswered}
      >
        Next
      </Button>
    </div>
  );
}

export default QuizFooter;
