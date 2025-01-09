import Method from './Method';
import styles from './MethodCheatSheet.module.css';

function MethodCheatSheet({ methodList }) {
  return (
    <>
      <div className={styles.methods}>
        <h2>Methods cheat sheet</h2>

        {methodList?.map((method) => (
          <Method
            key={method.name}
            method={method.name}
            description={method.description}
            syntax={method.syntax}
            returns={method.returns}
            accepts={method.accepts}
          />
        ))}
      </div>
    </>
  );
}
export default MethodCheatSheet;
