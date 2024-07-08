import { useState } from "react";
import { buildPath, getFeedback } from "../api/feedback";

function FeedbackPage({ feedbackItems }) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedbackData(data.feedback));
  }

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedbackItems.map((feedbackItem) => (
          <li>
            {feedbackItem.feedback}

            <button onClick={loadFeedbackHandler.bind(null, feedbackItem.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildPath();
  const data = getFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
