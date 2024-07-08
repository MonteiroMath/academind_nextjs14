import { useState, useRef } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email, feedback }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            type="text"
            id="feedback"
            rows="5"
            ref={feedbackRef}
          ></textarea>
        </div>
        <button>Send Feedback</button>
      </form>

      <hr />

      <button onClick={loadFeedbackHandler}>Load Feedback</button>

      <ul>
        {feedbackItems.map((feedbackItem) => (
          <li>{feedbackItem.feedback}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
