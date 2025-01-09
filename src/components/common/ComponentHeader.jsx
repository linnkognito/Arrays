import Button from './Button';

function ComponentHeader({
  className = '',
  title,
  onToggle,
  isShown = false,
  btnShow = 'Show',
  btnHide = 'Close',
}) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <Button onClick={() => onToggle()}>{isShown ? btnHide : btnShow}</Button>
    </div>
  );
}

export default ComponentHeader;
