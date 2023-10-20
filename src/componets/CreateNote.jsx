import React, { useState } from "react";
import "./CreateNote.css";

const CreateNote = (props) => {
  const [Note, setNote] = useState({
    Title: "",
    Content: "",
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const createNoteHandler = (e) => {
    e.preventDefault();
    if (Note.Title === "" || Note.Content === "") {
      alert("All Fields Are Mandatory !");
      return;
    }
    props.passNote(Note);
    setNote({
      Title: "",
      Content: "",
    });
  };
  return (
    <div className="main-container">
      <div className="container">
        <form>
          <input
            type="text"
            name="Title"
            id=""
            placeholder="Title"
            value={Note.Title}
            onChange={inputHandler}
          />

          <textarea
            name="Content"
            id=""
            rows="8"
            placeholder="Add note ...!"
            value={Note.Content}
            onChange={inputHandler}
          ></textarea>

          <button onClick={createNoteHandler}>Add Note</button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
