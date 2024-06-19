import Link from "next/link";
function ShareMealsPage() {
  return (
    <main>
      Share Meals
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}

export default ShareMealsPage;
