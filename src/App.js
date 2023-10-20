import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import CreateNote from "./componets/CreateNote.jsx";
import Note from "./componets/Note.jsx";

const App = () => {
  const LOCAL_STORAGE_KEY = "Notes";
  const [addItem, setAddItem] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [],
  );

  const createNote = (Note) => {
    setAddItem((oldData) => {
      return [...oldData, { id: uuid(), ...Note }];
    });
    console.log(Note);
  };
  const removeNoteHandler = (id) => {
    const newNoteList = addItem.filter((addItem) => {
      return addItem.id !== id;
    });
    setAddItem(newNoteList);
  };
  useEffect(() => {
    const retriveNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveNotes) setAddItem(retriveNotes);
    console.log(addItem);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(addItem));
  }, [addItem]);
  return (
    <div>
      <h1 className="head">Notes App</h1>
      <CreateNote passNote={createNote} />
      <h1 className="head">Note lists</h1>
      <div className="note">
        {addItem.map((value) => {
          console.log(value);
          return (
            <Note
              title={value.Title}
              content={value.Content}
              id={value.id}
              removeNoteHandler={removeNoteHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
