import { useState } from 'react';
import data from '../../dev-data/challenges';
import Challenge from './Challenge';

import styles from './ChallengeList.module.css';

function ChallengeList() {
  const [isOpen, setIsOpen] = useState(null);

  const toggleOpen = (index) =>
    isOpen === index ? setIsOpen(null) : setIsOpen(index);

  return (
    <div className={styles.challengesWrapper}>
      {data.map((challenge, i) => (
        <Challenge
          index={i}
          key={i}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          challenge={challenge}
        />
      ))}
    </div>
  );
}

export default ChallengeList;
