import { buildPath, getFeedback } from "../api/feedback";

function FeedbackPage({ feedbackItems }) {
  return (
    <ul>
      {feedbackItems.map((feedbackItem) => (
        <li>{feedbackItem.feedback}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = buildPath();
  const data = getFeedback(filePath);

  console.log(data);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
