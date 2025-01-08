import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';

function FinishScreen() {
  const { points, highscore, numQuestions, dispatch } = useQuiz();
  return (
    <div className='w-fit m-auto flex flex-col items-center gap-0'>
      <h3 className='m-0'>
        {points > highscore ? '🥳New highscore!' : '🚩Completed!'}
      </h3>

      <p>{`Your scored ${points} out of a total of ${numQuestions} points.`}</p>

      <Button
        className='w-full button'
        onClick={() => dispatch({ type: 'reset', payload: points })}
      >
        Play again!
      </Button>
    </div>
  );
}

export default FinishScreen;
