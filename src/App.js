import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import './index.css';
import Code from './Code';
import data from './challenges.json';

export default function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='App'>
      <h1>[ Arrays ]</h1>
      <ChallengesList />
    </div>
  );
}

function ChallengesList() {
  const [isOpen, setIsOpen] = useState(null);
  const handleClick = (num) => (isOpen === num ? setIsOpen(null) : setIsOpen(num));

  return (
    <div className='container'>
      {data.map((challenge, i) => (
        <Challenge num={i} isOpen={isOpen} onClick={handleClick} challenge={challenge} />
      ))}
    </div>
  );
}

function Challenge({ num, isOpen, onClick, challenge }) {
  const open = num === isOpen;

  return (
    <div className='challenge' onClick={() => onClick(num)}>
      <div className='challenge-top'>
        <h2>{`${challenge.emoji} ${challenge.title}`}</h2>
        <Button onClick={() => onClick(num)}>View</Button>
      </div>
      {open && (
        <>
          <p>{challenge.description}</p>
          <Code>{`${challenge.data}`}</Code>
          <Clue clues={challenge.clues} emoji={challenge.clueEmoji} />
          <Solution />
        </>
      )}
    </div>
  );
}

function Clue({ clues, emoji }) {
  return (
    <div className='clue'>
      <div className='clue-top'>
        <h3>🕵️‍♀️ Show clue</h3>
        <Button>Close</Button>
      </div>
      <div className='clue-text'>
        {clues.map((clue) => (
          <p>{`${emoji} ${clue}`}</p>
        ))}
      </div>
    </div>
  );
}

function Button({ children }) {
  return <button className='button'>{children}</button>;
}

function Solution() {
  return (
    <div className='solution'>
      <div className='solution-top'>
        <h3>👩‍💻 Show solution</h3>
        <Button>Close</Button>
      </div>
      <Code>{`arr.sort((a, b) => b - a);`}</Code>
    </div>
  );
}
