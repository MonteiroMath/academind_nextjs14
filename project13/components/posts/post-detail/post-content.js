import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";

function PostContent({ post }) {
  const { slug, title, image, content } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    img(image) {
      return <Image src={image.src} alt={image.alt} width={600} height={300} />;
    },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
