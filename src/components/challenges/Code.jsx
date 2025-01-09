import React, { useEffect } from 'react';
import Prism from 'prismjs';

export default function Code({
  children,
  language = 'javascript',
  inline = false,
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  if (inline) {
    return (
      <code className={`language-${language} code-inline`}>{children}</code>
    );
  }

  return (
    <div>
      <pre className='w-4/5 rounded'>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}
