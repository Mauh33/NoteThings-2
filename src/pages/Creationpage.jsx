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

  const [showModal, setShowModal] = useState(false);

  async function redirectPageAfterSuccess() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1500);
    }).then(() => {
      window.location.assign("/");
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.title || !formData.noteText) {
      alert("Please, complete the fields before submit");
      return;
    }

    const noteId = generateUniqueKey();
    const newNote = { id: noteId, ...formData };

    const existingNotes =
      JSON.parse(window.localStorage.getItem("notes")) || [];
    const updatedNotes = [...existingNotes, newNote];
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setShowModal(true);
    redirectPageAfterSuccess();

    setFormData({
      title: "",
      noteText: "",
    });
  };

  return (
    <>
      <section className='note-form-section'>
        <h2>{title}</h2>
        <form
          action=''
          method='post'
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
            <button type='submit' className='btn-note'>
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
          <dialog className='successModal' open>
            <p className='success-message'>Your note has been sent correctly</p>
            <span className='emote-success'>😃✔️</span>
            <span className='underline'></span>
            <p className='redirection-p'>redirection in progress</p>
            <div className='snippet' data-title='dot-flashing'>
              <div className='stage'>
                <div className='dot-flashing'></div>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}

export default Creationpage;
