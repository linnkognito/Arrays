import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorState } from '@codemirror/state';
import { xcodeDark } from '@uiw/codemirror-theme-xcode';
import { javascript } from '@codemirror/lang-javascript';

export default function CodeEditor({ className }) {
  const [code, setCode] = useState('// Start hacking');

  return (
    <>
      <CodeMirror
        className='editor'
        value={code}
        width='550px'
        theme={xcodeDark}
        extensions={[javascript({ jsx: true })]}
      />
    </>
  );
}
