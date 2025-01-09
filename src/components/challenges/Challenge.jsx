import { useState } from 'react';
import { parseText } from '../../utils/helpers';

import Code from './Code';
import CodeEditor from './CodeEditor';
import NoteCard from './NoteCard';
import Clues from './Clues';
import Solution from './Solution';
import Button from '../common/Button';

import styles from './Challenge.module.css';

function Challenge({ num, isOpen, onClick, challenge }) {
  const [showEditor, setShowEditor] = useState(false);
  const open = num === isOpen;

  function handleShowEditor() {
    setShowEditor((shown) => !shown);
  }

  return (
    <div className={styles.challenge}>
      <div className={styles.challengeTop}>
        <h2>{`${challenge.emoji} ${challenge.title}`}</h2>
        <Button onClick={() => onClick(num)}>{open ? 'Close' : 'View'}</Button>
      </div>

      {open && (
        <>
          {parseText(challenge.description)}
          {challenge.noteCard && <NoteCard challenge={challenge} />}
          <Code>{`${challenge.data}`}</Code>
          <Button className={'button-small'} onClick={handleShowEditor}>
            Code editor
          </Button>

          {showEditor && <CodeEditor />}
          <Clues clues={challenge.clues} emoji={challenge.clueEmoji} />
          <Solution>{challenge.solution}</Solution>
        </>
      )}
    </div>
  );
}

export default Challenge;
