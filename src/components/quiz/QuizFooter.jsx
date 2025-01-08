import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';

function QuizFooter() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  const hasAnswered = answer !== null;

  function handleNext() {
    if (index < numQuestions - 1) {
      dispatch({ type: 'nextQuestion' });
    } else {
      dispatch({ type: 'finished' });
    }
  }

  return (
    <div className='flex gap-4 justify-end items-center'>
      <p className='max-h-fit'>{`${index + 1}/${numQuestions}`}</p>

      <Button onClick={handleNext} disabled={!hasAnswered}>
        {index === numQuestions - 1 ? 'Complete' : 'Next'}
      </Button>
    </div>
  );
}

export default QuizFooter;
