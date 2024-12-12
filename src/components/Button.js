function Button({ children, onClick, className = 'button' }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
