import Link from "next/link";
import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
import { getAvailableNewsYears } from "@/lib/news";

function FilteredNewsPage({ params }) {
  const newsYear = params.filter;
  const news = getNewsForYear(newsYear);
  const links = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <NewsList news={news} />
    </>
  );
}

export default FilteredNewsPage;
