import React from "react";
import "./Note.css";
import { AiOutlineDelete } from "react-icons/ai";

const Note = (props) => {
  return (
    <div id="box" className="boxModel">
      <textarea name="" id="heading" cols="1" rows="1">
        {props.title}
      </textarea>

      <textarea name="" id="paragraph" cols="0" rows="10">
        {props.content}
      </textarea>
      <AiOutlineDelete
        onClick={() => props.removeNoteHandler(props.id)}
        className="deleteIcon"
        size={"25px"}
      />
    </div>
  );
};

export default Note;
