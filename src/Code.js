import React, { useEffect } from 'react';
import Prism from 'prismjs';

export default function Code({ children, language = 'javascript', inline = false }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  return (
    <div className={inline ? 'code-inline' : 'code-box'}>
      <pre className={inline ? '' : 'line-numbers'}>
        <code className={`language-${language}`}>arr.sort((a, b) => console.log(b - a));</code>
        {/* <code className={`language-${language}`}>{children}</code> */}
      </pre>
    </div>
  );
}
