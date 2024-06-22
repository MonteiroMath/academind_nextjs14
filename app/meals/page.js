import Link from "next/link";
import styles from "./page.module.css";

import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

function MealsPage() {
  const meals = getMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
          <p>
            Choose your favorite recipe and cook it yourself. It is easy and
            fun!
          </p>
          <p className={styles.cta}>
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
          </p>
        </h1>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

export default MealsPage;
