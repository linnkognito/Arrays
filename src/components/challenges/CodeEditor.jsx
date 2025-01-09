import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { xcodeDark } from '@uiw/codemirror-theme-xcode';
import { javascript } from '@codemirror/lang-javascript';
import styles from './CodeEditor.module.css';

export default function CodeEditor() {
  const customTheme = EditorView.theme({
    '.cm-content': {
      backgroundColor: '#2b2b2b !important',
    },
  });

  return (
    <>
      <CodeMirror
        className={styles.editor}
        value='// Start hacking'
        width='550px'
        theme={xcodeDark}
        extensions={[javascript({ jsx: true }), customTheme]}
      />
    </>
  );
}
