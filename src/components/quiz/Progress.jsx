function Progress({ index, numQuestions, answer }) {
  return (
    <progress
      className='w-full h-8'
      max={numQuestions}
      value={index + Number(answer !== null)}
    ></progress>
  );
}

export default Progress;
