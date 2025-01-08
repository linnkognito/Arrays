import Method from './Method';

function MethodCheatSheet({ methodList }) {
  return (
    <div className='methods'>
      <h2>Methods cheat sheet</h2>

      {methodList?.map((method) => (
        <Method
          method={method.name}
          description={method.description}
          syntax={method.syntax}
          returns={method.returns}
          accepts={method.accepts}
        />
      ))}
    </div>
  );
}
export default MethodCheatSheet;
