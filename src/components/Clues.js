import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { parseCodeTags } from '../utils/helpers';
import ComponentHeader from './ComponentHeader';

function Clues({ clues, emoji }) {
  const [showClues, setShowClues] = useState(false);
  const [isRevealed, setIsRevealed] = useState(null);

  const handleToggleClues = () => setShowClues((open) => !open);
  const handleRevealClue = (i) => setIsRevealed(isRevealed === i ? null : i);

  return (
    <div className='clues'>
      <ComponentHeader
        className='clues-top'
        title='🕵️‍♀️ Show clues'
        onToggle={handleToggleClues}
        isShown={showClues}
      ></ComponentHeader>

      {showClues && (
        <div className='clues-container'>
          {clues.map((clue, i) => (
            <div className='clue' key={uuidv4()}>
              <p className='clue-title' onClick={() => handleRevealClue(i)}>
                {`${emoji} ${clue.title} ${i + 1}`}
              </p>
              {isRevealed === i && <p>{parseCodeTags(clue.clue)}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Clues;
