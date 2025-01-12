import { useState } from 'react';
import { parseText } from '../../utils/helpers';

import Code from './Code';
import CodeEditor from './CodeEditor';
import NoteCard from './NoteCard';
import Clues from './Clues';
import Solution from './Solution';
import Button from '../common/Button';

import styles from './Challenge.module.css';

function Challenge({ index, isOpen, toggleOpen, challenge }) {
  const [showEditor, setShowEditor] = useState(false);
  const open = index === isOpen;

  return (
    <div className={styles.challenge}>
      <div className={styles.challengeTop}>
        <h2>{`${challenge.emoji} ${challenge.title}`}</h2>
        <Button onClick={() => toggleOpen(index)}>
          {open ? 'Close' : 'View'}
        </Button>
      </div>

      {open && (
        <>
          {parseText(challenge.description)}

          {challenge.noteCard && <NoteCard challenge={challenge} />}

          <Code>{`${challenge.data}`}</Code>

          <div className={styles.editorContainer}>
            <Button
              className={'button-small'}
              onClick={() => setShowEditor((shown) => !shown)}
            >
              {!showEditor ? 'Open code editor' : 'Hide editor'}
            </Button>
            {showEditor && <CodeEditor />}
          </div>

          <Clues clues={challenge.clues} emoji={challenge.clueEmoji} />

          <Solution>{challenge.solution}</Solution>
        </>
      )}
    </div>
  );
}

export default Challenge;
