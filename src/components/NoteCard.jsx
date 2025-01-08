import { parseText } from '../utils/helpers';

function NoteCard({ challenge }) {
  return (
    <div className='note-card'>
      <p className='note-card-label'>{challenge.noteCard.title}</p>
      {parseText(challenge.noteCard.content)}
    </div>
  );
}

export default NoteCard;
