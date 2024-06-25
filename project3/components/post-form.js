"use client";
import { useFormState } from "react-dom";

import FormSubmit from "@/components/form-submit";

function PostForm({ action }) {
  const [currentState, formAction] = useFormState(action, {});

  return (
    <form action={formAction}>
      <p className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </p>
      <p className="form-control">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="image"
          name="image"
        />
      </p>
      <p className="form-control">
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" />
      </p>
      <p className="form-actions">
        <FormSubmit />
      </p>
      {currentState.errors && (
        <ul className="form-errors">
          {currentState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default PostForm;
