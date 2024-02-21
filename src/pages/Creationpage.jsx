import React, { useState } from "react";
import "../styles/pages/_creationpage.scss";
import "../styles/components-style/_btn.scss";

const generateUniqueKey = () => {
  const timeStamp = new Date().getTime();
  const min = 1000;
  const max = 9999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return `${timeStamp}-${randomNumber}`;
};

function Creationpage({ title }) {
  const [formData, setFormData] = useState({
    title: "",
    noteText: "",
  });

  const handleSubmit = e => {
    e.preventDefault();

    const noteId = generateUniqueKey();
    const newNote = { id: noteId, ...formData };

    onAdd(newNote);

    setFormData({
      title: "",
      noteText: "",
    });

    alert(
      "Your note has been added to your list, click on NoteThings to have a view"
    );
  };

  const handleAddNote = newNote => {
    const existingNotes =
      JSON.parse(window.localStorage.getItem("notes")) || [];
    const updatedNotes = [...existingNotes, newNote];
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));
    console.log("New note added:", newNote);
  };

  return (
    <>
      <section className='note-form-section'>
        <h2>{title}</h2>
        <form
          action=''
          method='get'
          className='form-bloc'
          onSubmit={handleSubmit}
        >
          <label>
            A title for your note:
            <input
              type='text'
              name='title'
              id='title'
              value={formData.title}
              placeholder='Enter title'
              maxLength={30}
              onChange={e =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </label>
          <label>
            A description for your note:
            <textarea
              placeholder='Enter description'
              name='text'
              value={formData.noteText}
              maxLength={120}
              onChange={e =>
                setFormData({ ...formData, noteText: e.target.value })
              }
            />
          </label>
          <div className='button-bloc'>
            <button type='submit' className='btn-note'>
              <p>Add a note</p>
              <div className='round-container'>
                <div className='plus-sign'></div>
              </div>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Creationpage;
