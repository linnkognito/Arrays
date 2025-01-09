import classNames from 'classnames';
import styles from './Button.module.css';

function Button({ children, onClick, className, disabled = false }) {
  const buttonClass = className ? styles[className] : styles.button;

  return (
    <button
      className={classNames(buttonClass, { 'opacity-50': disabled })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
