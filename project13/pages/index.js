import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from "../lib/posts-utils";

function HomePage({ posts }) {
  console.log(posts);

  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts,
    },
    revalidate: 1800
  };
}

export default HomePage;
