import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

function ImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

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
