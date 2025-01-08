import { useState } from 'react';

import Code from './Code';
import ComponentHeader from './ComponentHeader';

function Solution({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleSolution = () => setIsOpen((open) => !open);

  return (
    <div className='solution'>
      <ComponentHeader
        className='solution-top'
        title='👩‍💻 Show solution'
        onToggle={handleToggleSolution}
        isShown={isOpen}
      />

      {isOpen && <Code>{children}</Code>}
    </div>
  );
}

export default Solution;
