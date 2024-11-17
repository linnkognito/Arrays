///////____________I M P O R T S____________///////
import React, { useState, useEffect } from 'react';

//___L I B R A R I E S__________________________//
import { v4 as uuidv4 } from 'uuid';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

//___F I L E S__________________________________//
import './index.css';
import { parseCodeTags, parseText } from './utils/helpers';
import Code from './Code';
import data from './dev-data/challenges.json';

///////________________A P P________________///////
export default function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='App'>
      <h1>[ Arrays ]</h1>

      <About collapsedNumWords={18}>
        <p>
          Designed for JavaScript beginners & other cool nerds, this app is a
          playground to put your array manipulation skills to the test.
        </p>
        <br />
        <br />
        <p>
          I have included a handful of clues & one example solution to guide you
          if you're stuck, or just curious what happens if you click the red
          button.
        </p>
        <br />
        <br />
        <p>
          But remember — there's no “right” way to solve a JavaScript problem.
          If your code works, you did it.
        </p>

        <p>Pat yourself on the back & keep on hackin’.</p>
      </About>

      <ChallengesList />
    </div>
  );
}

//___A B O U T__________________________________//
function About({
  collapsedNumWords = 10,
  btnTextOpen = 'Show more',
  btnTextClose = 'Show less',
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleButtonClick = () => setIsExpanded((isExpanded) => !isExpanded);

  function previewText() {
    const markup = React.Children.toArray(children)
      .map((child) => {
        // Plain string
        if (typeof child === 'string') return child;

        // HTML element
        if (
          React.isValidElement(child) &&
          typeof child.props.children === 'string'
        ) {
          return child.props.children;
        }
        return '';
      })
      .join(' ');

    return markup.split(' ').slice(0, collapsedNumWords).join(' ');
  }

  return (
    <div className='about'>
      <p className='intro'>Welcome to the Array Challenge app!</p>

      <p>
        <span className='text-container'>
          {isExpanded ? children : `${previewText()}... `}

          <button
            style={{ display: 'inline', verticalAlign: 'middle' }}
            className='button-small'
            onClick={() => handleButtonClick()}
          >
            {isExpanded ? btnTextClose : btnTextOpen}
          </button>
        </span>
      </p>
    </div>
  );
}
//___C H A L L E N G E S________________________//
function ChallengesList() {
  const [isOpen, setIsOpen] = useState(null);
  const handleClick = (num) =>
    isOpen === num ? setIsOpen(null) : setIsOpen(num);

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
          {parseText(challenge.description)}
          {challenge.noteCard && <NoteCard challenge={challenge} />}
          <Code>{`${challenge.data}`}</Code>
          <Clues clues={challenge.clues} emoji={challenge.clueEmoji} />
          <Solution>{challenge.solution}</Solution>
        </>
      )}
    </div>
  );
}

function NoteCard({ challenge }) {
  return (
    <div className='note-card'>
      <p className='note-card-label'>{challenge.noteCard.title}</p>
      {parseText(challenge.noteCard.content)}
    </div>
  );
}

//___C L U E S__________________________________//
function Clues({ clues, emoji }) {
  const [showClues, setShowClues] = useState(false);
  const [isRevealed, setIsRevealed] = useState(null);

  const handleToggleClues = () => setShowClues((open) => !open);
  const handleRevealClue = (i) => setIsRevealed(isRevealed === i ? null : i);

  return (
    <div className='clues'>
      <SectionHeader
        className='clues-top'
        title='🕵️‍♀️ Show clues'
        onToggle={handleToggleClues}
        isShown={showClues}
      ></SectionHeader>

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

//___S O L U T I O N____________________________//
function Solution({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleSolution = () => setIsOpen((open) => !open);

  return (
    <div className='solution'>
      <SectionHeader
        className='solution-top'
        title='👩‍💻 Show solution'
        onToggle={handleToggleSolution}
        isShown={isOpen}
      />

      {isOpen && <Code>{children}</Code>}
    </div>
  );
}

//___R E U S A B L E____________________________//
function SectionHeader({
  className = '',
  title,
  onToggle,
  isShown = false,
  btnShow = 'Show',
  btnHide = 'Close',
}) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <Button onClick={() => onToggle()}>{isShown ? btnHide : btnShow}</Button>
    </div>
  );
}
function Button({ children, onClick, cls }) {
  return (
    <button className={`button ${cls || ''}`} onClick={onClick}>
      {children}
    </button>
  );
}
