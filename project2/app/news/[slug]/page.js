import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

async function NewsDetailPage({ params }) {
  const { slug } = params;

  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          {" "}
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
        <p>{newsItem.content}</p>
      </header>
    </article>
  );
}

export default NewsDetailPage;
