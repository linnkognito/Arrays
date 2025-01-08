import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';

function QuizFooter() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className='flex gap-4 justify-end items-center'>
      <p className='max-h-fit'>{`${index + 1}/${numQuestions}`}</p>

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
