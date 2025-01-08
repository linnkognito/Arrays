import { useQuiz } from '../../contexts/QuizContext';

function QuizQuestion({ question }) {
  const { currentQuestion, index, answer, dispatch } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className='clues bg-offwhite'>
      <h3 className='my-2'>{`🕵️‍♀️ Question ${index + 1}`}</h3>
      <p className='px-2'>{question?.question}</p>

      <div className={`clues-container`}>
        {question?.answers.map((selection) => (
          <div
            key={selection.id}
            className={`transition-all ${
              !hasAnswered
                ? 'clue'
                : answer === selection.id
                ? currentQuestion.correctAnswer === selection.id
                  ? 'correct-answer'
                  : 'wrong-answer'
                : 'clue opacity-70'
            }`}
            onClick={() =>
              dispatch({ type: 'answerGiven', payload: selection.id })
            }
          >
            <p className='clue-title flex gap-2'>
              <span className='w-fit h-fit text-offwhite bg-teal px-2 rounded-lg'>
                {selection.id}
              </span>
              {selection.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default QuizQuestion;
