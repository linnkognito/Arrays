import React, { useEffect } from 'react';
import Prism from 'prismjs';

export default function Code({ children, language = 'javascript', inline = false }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  if (inline) {
    return <code className={`language-${language} code-inline`}>{children}</code>;
  }

  return (
    <div className='code-box'>
      <pre className='line-numbers'>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}
