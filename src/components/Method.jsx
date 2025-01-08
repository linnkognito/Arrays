import Code from './Code';

function Method({ method, description, syntax, returns, accepts }) {
  return (
    <div className='method'>
      <div className='method-name'>{method}</div>

      <p className='method-description'>{description}</p>

      <Code>{syntax}</Code>

      <div className='method-accepts clues-container clue'>
        <p>
          <span className='method-title'>Accepts:</span> {accepts || '-'}
        </p>
      </div>
      <div className='method-returns clues-container clue'>
        <p>
          <span className='method-title'>Returns:</span> {returns || '-'}
        </p>
      </div>
    </div>
  );
}

export default Method;
