import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/first-news">First Link</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second Link</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
