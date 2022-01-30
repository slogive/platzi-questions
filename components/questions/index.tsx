import styles from './questions.module.scss';

export default function Questions({ DATA }: { DATA: { QUESTIONS: any } }) {
  const { QUESTIONS } = DATA;

  if (!QUESTIONS) {
    return <h2>No questions found</h2>;
  }

  function convertedText(text: string) {
    return text
      .replace(/<p>|<[/]p>|<em>|<[/]em>|<code>|<[/]code>/gi, '')
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  return (
    <section className={styles.questions}>
      {QUESTIONS &&
        QUESTIONS.map((ITEM: any, INDEX: number) => (
          <div key={INDEX} className={`${styles.question} ${ITEM.correct ? styles.correct : styles.incorrect}`}>
            <h2>{convertedText(ITEM.question)}</h2>
            <p className={styles.answer}>{convertedText(ITEM.answer)}</p>
          </div>
        ))}
    </section>
  );
}
