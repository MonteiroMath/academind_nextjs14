import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";

import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

function MealsSlugPage({ params }) {
  const { slug } = params;

  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  const parsedInstructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt="meal image" fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}> {meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: parsedInstructions }}
        ></p>
      </main>
    </>
  );
}

export default MealsSlugPage;
