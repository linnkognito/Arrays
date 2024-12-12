function Progress({ index, numQuestions, answer }) {
  return (
    <div className='px-6 pt-2 pb-6'>
      <progress
        className='w-600'
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
    </div>
  );
}

export default Progress;
