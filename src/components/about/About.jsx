import styles from './About.module.css';

function About() {
  const paragraphs = [
    `Designed for JavaScript beginners & other cool nerds, this app is a playground to put your array manipulation skills to the test.`,
    `I have included a handful of clues & one example solution to guide you if you're stuck, or just curious what happens if you click the red button.`,
    `But remember — there's no “right” way to solve a JavaScript problem. If your code works, you did it.`,
    `Pat yourself on the back & keep on hackin’.`,
  ];
  return (
    <div className={styles.about}>
      <h3>Welcome to the Array Challenge app!</h3>

      <div className={styles.textContainer}>
        {paragraphs.map((p) => (
          <p>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default About;
