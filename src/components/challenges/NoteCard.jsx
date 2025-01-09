import { parseText } from '../../utils/helpers';
import styles from './NoteCard.module.css';

function NoteCard({ challenge }) {
  return (
    <div className={styles.noteCard}>
      <p className={styles.noteCardLabel}>{challenge.noteCard.title}</p>
      {parseText(challenge.noteCard.content)}
    </div>
  );
}

export default NoteCard;
