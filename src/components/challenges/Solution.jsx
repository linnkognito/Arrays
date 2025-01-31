import { useState } from 'react';
import Code from './Code';
import ComponentHeader from '../common/ComponentHeader';
import styles from './Solution.module.css';

function Solution({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleSolution = () => setIsOpen((open) => !open);

  return (
    <div className={styles.solution}>
      <ComponentHeader
        className='top'
        title='👩‍💻 Show solution'
        onToggle={handleToggleSolution}
        isShown={isOpen}
      />

      {isOpen && <Code>{children}</Code>}
    </div>
  );
}

export default Solution;
