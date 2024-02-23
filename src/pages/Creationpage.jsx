import React, { useState } from "react";
import "../styles/pages/_creationpage.scss";
import "../styles/components-style/_btn.scss";
import { redirect } from "react-router-dom";

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

  const [showModal, setShowModal] = useState(false);

  const redirectPageAfterSuccess = () => {
    if (!formData.title || !formData.noteText) {
      console.error("you have to write your note before sending it");
    } else {
      console.log("success !");
      return redirect("/");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const noteId = generateUniqueKey();
    const newNote = { id: noteId, ...formData };

    const existingNotes =
      JSON.parse(window.localStorage.getItem("notes")) || [];
    const updatedNotes = [...existingNotes, newNote];
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setFormData({
      title: "",
      noteText: "",
    });

    setShowModal(true);
    // redirectPageAfterSuccess();
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
              minLength={5}
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
              minLength={10}
              maxLength={120}
              onChange={e =>
                setFormData({ ...formData, noteText: e.target.value })
              }
            />
          </label>
          <div className='button-bloc'>
            <button
              type='submit'
              className='btn-note'
              onClick={() => setShowModal(true)}
            >
              <p>Add a note</p>
              <div className='round-container'>
                <div className='plus-sign'></div>
              </div>
            </button>
          </div>
        </form>
      </section>
      {showModal && (
        <div className={`dialog-bloc ${showModal ? "active" : ""}`}>
          <dialog
            className='successModal'
            open
            onClose={() => setShowModal(false)}
          >
            <p className='success-message'>Your note has been sent correctly</p>
            <span className='emote-success'>😃✔️</span>
            <span className='underline'></span>
            <p className='redirection-p'>redirection in progress</p>
            <div class='snippet' data-title='dot-flashing'>
              <div class='stage'>
                <div class='dot-flashing'></div>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}

export default Creationpage;
