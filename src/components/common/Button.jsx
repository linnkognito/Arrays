import styles from './Button.module.css';

function Button({ children, onClick, className, disabled = false }) {
  return (
    <button
      className={`${className || styles.button} ${disabled && 'opacity-50'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
