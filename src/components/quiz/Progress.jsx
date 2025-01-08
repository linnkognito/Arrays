function Progress({ index, numQuestions, answer, points }) {
  return (
    <div className='flex items-center gap-4 w-full'>
      <progress
        className='w-full h-8'
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p className='min-w-fit'>{points} points</p>
      {/* <p>{`${index + 1}/${numQuestions}`}</p> */}
    </div>
  );
}

export default Progress;
