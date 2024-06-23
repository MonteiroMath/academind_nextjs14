import { DUMMY_NEWS } from "@/dummy-news";

function NewsDetailPage({ params }) {
  const { slug } = params;

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug);

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
        <p>{newsItem.content}</p>
      </header>
    </article>
  );
}

export default NewsDetailPage;
