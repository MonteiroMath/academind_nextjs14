import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-utils";

function PostDetailPage({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { slug } = context.params;

  const post = getPostData(slug);

  return { props: { post } };
}

export function getStaticPaths() {
  const postFiles = getPostsFiles();

  const slugs = postFiles.map((postFile) => postFile.replace(/\.md$/, ""));

  console.log(slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
