import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import data from '../../dev-data/challenges';
import Challenge from './Challenge';

function ChallengeList() {
  const [isOpen, setIsOpen] = useState(null);
  const handleClick = (num) =>
    isOpen === num ? setIsOpen(null) : setIsOpen(num);

  return (
    <div className='flex flex-col'>
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

export default ChallengeList;
