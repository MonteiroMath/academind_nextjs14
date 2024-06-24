import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";

async function ImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  );
}

export default ImagePage;
