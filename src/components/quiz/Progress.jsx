function Progress({ index, numQuestions, answer, points }) {
  return (
    <div className='flex justify-center items-center gap-4 mx-10'>
      {/* Progress bar */}
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
        aria-valuenow={index + Number(answer !== null)}
        aria-valuemin='0'
        aria-valuemax={numQuestions}
        aria-label={`Progress ${
          index + Number(answer !== null)
        } of ${numQuestions}`}
      ></progress>

      {/* Points counter */}
      <p className='flex gap-1 min-w-fit text-lg '>
        <span className='font-bold'>{`${points}/10`}</span>
        points
      </p>
    </div>
  );
}

export default Progress;
