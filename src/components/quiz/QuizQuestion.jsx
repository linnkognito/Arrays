import { useQuiz } from '../../contexts/QuizContext';

function QuizQuestion({ question }) {
  const { currentQuestion, index, answer, dispatch } = useQuiz();
  const hasAnswered = answer !== null;

  function setClass(id) {
    return answer === id
      ? currentQuestion.correctAnswer === id
        ? 'correct-answer'
        : 'wrong-answer'
      : 'clue opacity-70';
  }

  return (
    <div className='quiz-question bg-offwhite'>
      <h3 className='my-2'>{`🕵️‍♀️ Question ${index + 1}`}</h3>
      <p className='px-2'>{question?.question}</p>

      <div className={`clues-container`}>
        {question?.answers.map((option) => (
          <div
            key={option.id}
            className={`transition-all ${
              !hasAnswered ? 'clue' : setClass(option.id)
            }`}
            onClick={() =>
              hasAnswered
                ? ''
                : dispatch({ type: 'answerGiven', payload: option.id })
            }
          >
            <p className='clue-title flex gap-2'>
              <span className='w-fit h-fit text-offwhite bg-teal px-2 rounded-lg'>
                {option.id}
              </span>
              {option.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default QuizQuestion;
