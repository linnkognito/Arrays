import styles from './Progress.module.css';

function Progress({ index, numQuestions, answer, points }) {
  return (
    <div className={styles.progress}>
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
      <p className={styles.points}>
        <span className='font-bold'>{`${points}/10`}</span>
        points
      </p>
    </div>
  );
}

export default Progress;
