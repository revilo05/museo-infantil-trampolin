import styles from "@/components/module-two.module.css";

type RoomFactsProps = {
  facts: string[];
};

export function RoomFacts({ facts }: RoomFactsProps) {
  return (
    <div className={styles.factsGrid}>
      {facts.map((fact, index) => (
        <article className={styles.factCard} key={fact}>
          <span className={styles.factNumber}>DATO {index + 1}</span>
          <p>{fact}</p>
        </article>
      ))}
    </div>
  );
}
