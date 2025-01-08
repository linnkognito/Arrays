import { useQuiz } from '../../contexts/QuizContext';
import Code from '../Code';

function QuizQuestion({ question }) {
  const { currentQuestion, index, answer, dispatch } = useQuiz();
  const hasAnswered = answer !== null;

  function setClass(id) {
    return answer === id
      ? currentQuestion.correctAnswer === id
        ? 'correct-answer'
        : 'wrong-answer'
      : 'option-disabled';
  }

  function renderFormattedQuestion(text) {
    // Regex to match text inside backticks
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        // If it's a code snippet, wrap it in the <Code> component
        return <Code key={index}>{part.slice(1, -1)}</Code>;
      }
      // Otherwise, return the plain text
      return part;
    });
  }

  return (
    <div className='quiz-question bg-offwhite'>
      <h3 className='my-2'>{`🕵️‍♀️ Question ${index + 1}`}</h3>
      {/* <p className='px-2'>{question?.question}</p> */}
      <p className='px-2'>
        {renderFormattedQuestion(question?.question || '')}
      </p>

      <div className={`quiz-container`}>
        {question?.answers.map((option) => (
          <div
            key={option.id}
            className={`transition-all ${
              !hasAnswered ? 'option' : setClass(option.id)
            }`}
            onClick={() =>
              hasAnswered
                ? ''
                : dispatch({ type: 'answerGiven', payload: option.id })
            }
          >
            <p className='option-title flex gap-2'>
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
