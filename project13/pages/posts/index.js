import Hero from "../../components/home-page/hero";
import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for proudction - It makes building fullstack react app easier",
    date: "2024-09-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for proudction - It makes building fullstack react app easier",
    date: "2024-09-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for proudction - It makes building fullstack react app easier",
    date: "2024-09-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for proudction - It makes building fullstack react app easier",
    date: "2024-09-10",
  },
];

function AllPostsPage() {


  return (
    <>
      <AllPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default AllPostsPage;
