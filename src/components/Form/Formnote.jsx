import { useState } from "react";
import "../../styles/components-style/_formNote.scss";

const generateUniqueKey = () => {
  const timeStamp = new Date().getTime();
  const min = 1000;
  const max = 9999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return `${timeStamp}-${randomNumber}`;
}

const FormNote = ({onAdd}) => {
  const [formData, setFormData] = useState({
    "title": "",
    "noteText": ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteId = generateUniqueKey();
    const newNote = { id: noteId, ...formData };

    onAdd(newNote);

    setFormData({
      title: "",
      noteText: ""
    });

    alert("Your note has been added to your list, click on NoteThings to have a view");
  }

  return (
    <form action="" method="get" className="form-bloc" onSubmit={handleSubmit}>
      <label>
        A title for your note:
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          placeholder="Enter title"
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
      </label>
      <label>
        A description for your note:
        <textarea
          placeholder="Enter description"
          name="text"
          value={formData.noteText}
          onChange={(e) => setFormData({...formData, noteText: e.target.value})}
        />
      </label>
      <div className="button-bloc">
        <button type="submit" className="btn-note">
          <p>Add a note</p>
          <div className="round-container">
            <div className="plus-sign"></div>
          </div>
        </button>
      </div>
    </form>
  );
}

export default FormNote;


/*

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteId = generateUniqueKey();

    const existingNotes = JSON.parse(window.localStorage.getItem("notes")) || [];
    const newNote = {id: noteId, ...formData};
    const updatedNotes = [...existingNotes, newNote];
    // existingNotes[noteId] = formData;

    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));

    console.log("data sent to localStorage", formData);

    setFormData({
      title: "",
      noteText: ""
    });

    alert("your note has been added to your list, click on NoteThings to have a view");
  } */
