///////____________I M P O R T S____________///////
import { useState, useEffect } from 'react';

//___L I B R A R I E S__________________________//
import { v4 as uuidv4 } from 'uuid';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

//___F I L E S__________________________________//
import './index.css';
import Code from './Code';
import data from './challenges.json';

///////________________A P P________________///////

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

///////_________C H A L L E N G E S_________///////

function ChallengesList() {
  const [isOpen, setIsOpen] = useState(null);
  const handleClick = (num) => (isOpen === num ? setIsOpen(null) : setIsOpen(num));

  return (
    <div className='container'>
      {data.map((challenge, i) => (
        <Challenge
          num={i}
          key={uuidv4()}
          isOpen={isOpen}
          onClick={handleClick}
          challenge={challenge}
        />
      ))}
    </div>
  );
}

function Challenge({ num, isOpen, onClick, challenge }) {
  const open = num === isOpen;

  return (
    <div className='challenge'>
      <div className='challenge-top'>
        <h2>{`${challenge.emoji} ${challenge.title}`}</h2>
        <Button onClick={() => onClick(num)}>{open ? 'Close' : 'View'}</Button>
      </div>
      {open && (
        <>
          <p>{challenge.description}</p>
          <Code>{`${challenge.data}`}</Code>
          <Clues clues={challenge.clues} emoji={challenge.clueEmoji} />
          <Solution>{challenge.solution}</Solution>
        </>
      )}
    </div>
  );
}

///////______________C L U E S______________///////

function Clues({ clues, emoji }) {
  const [showClues, setShowClues] = useState(false);
  const [isRevealed, setIsRevealed] = useState(null);

  const handleToggleClues = () => setShowClues((open) => !open);
  const handleRevealClue = (i) => setIsRevealed(isRevealed === i ? null : i);

  return (
    <div className='clues'>
      <div className='clues-top'>
        <h3>🕵️‍♀️ Show clues</h3>
        <Button onClick={handleToggleClues}>{showClues ? 'Close' : 'Show'}</Button>
      </div>
      {showClues && (
        <div className='clues-container'>
          {clues.map((clue, i) => (
            <div className='clue' key={uuidv4()}>
              <p className='clue-title' onClick={() => handleRevealClue(i)}>
                {`${emoji} ${clue.title} ${i + 1}`}
              </p>
              {isRevealed === i && <p>{clue.clue}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

///////___________S O L U T I O N___________///////

function Solution({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleSolution = () => setIsOpen((open) => !open);

  return (
    <div className='solution'>
      <div className='solution-top'>
        <h3>👩‍💻 Show solution</h3>
        <Button onClick={handleToggleSolution}>{isOpen ? 'Close' : 'Show'}</Button>
      </div>
      {isOpen && <Code>{children}</Code>}
    </div>
  );
}
///////___________R E U S A B L E___________///////

function Button({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}
