function Button({ children, onClick, className = 'button', disabled = false }) {
  return (
    <button
      className={`${className} ${disabled && 'opacity-50'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
