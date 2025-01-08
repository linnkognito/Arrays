import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';

function StartScreen() {
  const { dispatch, numQuestions, SECONDS_PER_QUESTION: seconds } = useQuiz();

  return (
    <div className='w-full flex items-center gap-4'>
      <h3 className='w-1/4'>Welcome to the Array Quiz!</h3>

      <div className='flex flex-col'>
        <p>{`There's a total of ${numQuestions} questions, and you will have ${seconds} seconds to solve each one. Good luck! 🤞`}</p>
        <Button onClick={() => dispatch({ type: 'start' })}>
          Let's do it!
        </Button>
      </div>
    </div>
  );
}

export default StartScreen;
