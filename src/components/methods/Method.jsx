import Code from '../challenges/Code';
import styles from './Method.module.css';
import classNames from 'classnames';

function Method({ method, description, syntax, returns, accepts }) {
  return (
    <div className={styles.methodCard}>
      <h3>{method}</h3>
      <p>{description}</p>
      <Code>{syntax}</Code>

      <div className={styles.acceptsReturnsWrapper}>
        {/* Accepts */}
        <div className={classNames(styles.methodAccepts)}>
          <p>
            <span className={styles.methodSubTitle}>Accepts:</span>{' '}
            {accepts || '-'}
          </p>
        </div>

        {/* Returns */}
        <div className={classNames(styles.methodReturns)}>
          <p>
            <span className={styles.methodSubTitle}>Returns:</span>{' '}
            {returns || '-'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Method;
