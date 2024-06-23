import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedImagePage;
