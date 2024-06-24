import NewsList from "@/components/news-list";

async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const news = await response.json();

  let newsContent;

  return (
    <>
      <h1>NewsPage</h1>
      <NewsList news={news} />
    </>
  );
}

export default NewsPage;
