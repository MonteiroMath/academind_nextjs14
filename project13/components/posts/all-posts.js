import classes from "./all-posts.module.css";
import Postgrid from "./posts-grid";

function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <Postgrid posts={posts} />
    </section>
  );
}

export default AllPosts;
