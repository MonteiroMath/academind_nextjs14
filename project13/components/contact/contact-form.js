import { useRef } from "react";
import classes from "./contact-form.module.css";

function ContactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  function sendMessageHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const message = messageRef.current.value;

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" ref={emailRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" ref={nameRef} required />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea id="message" rows="5" ref={messageRef}></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
