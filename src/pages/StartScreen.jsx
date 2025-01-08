import Button from '../components/Button';

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className='bg-offwhite rounded px-6 pt-2 pb-6 border-3 border-solid border-cyan shadow-primary w-500'>
      <h2 className='text-orange'>Time to quiz!</h2>
      <h3>
        There's {numQuestions} questions to test your array method knowledge.
      </h3>
      <Button onClick={() => dispatch({ type: 'start' })}>Let's do it!</Button>
    </div>
  );
}

export default StartScreen;
