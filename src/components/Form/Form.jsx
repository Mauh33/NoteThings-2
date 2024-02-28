import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/components-style/_form.scss";
import "../../styles/components-style/_btn.scss";

function Form({ editingNoteId, setEditingNoteId, setShowModal }) {
  const [formData, setFormData] = useState({
    title: "",
    noteText: "",
  });

  const generateUniqueKey = () => {
    const timeStamp = new Date().getTime();
    const min = 1000;
    const max = 9999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return `${timeStamp}-${randomNumber}`;
  };

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

  const handleModifySubmit = e => {
    e.preventDefault();

    const existingNotes =
      JSON.parse(window.localStorage.getItem("notes")) || [];

    const indexOfNote = existingNotes.findIndex(
      note => note.id === editingNoteId
    );
    if (indexOfNote !== -1) {
      const updatedNote = { id: editingNoteId, ...formData };
      existingNotes[indexOfNote] = updatedNote;
      window.localStorage.setItem("notes", JSON.stringify(existingNotes));
    }

    setTimeout(() => {
      setShowModal(false);
    }, 1000);

    setEditingNoteId(null);
  };

  useEffect(() => {
    if (editingNoteId) {
      const noteToEdit = JSON.parse(window.localStorage.getItem("notes")).find(
        note => note.id === editingNoteId
      );
      if (noteToEdit) {
        setFormData(noteToEdit);
      }
    }
  }, [editingNoteId]);

  return (
    <form
      action=''
      method='post'
      className='form-bloc'
      onSubmit={editingNoteId ? handleModifySubmit : handleSubmit}
    >
      <label className='label-title'>
        <p>A title for your note:</p>
        <input
          type='text'
          name='title'
          id='title'
          value={formData.title}
          placeholder='Enter title'
          minLength={5}
          maxLength={30}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
        />
      </label>
      <label>
        <p>A description for your note:</p>
        <textarea
          placeholder='Enter description'
          name='text'
          value={formData.noteText}
          minLength={10}
          maxLength={120}
          onChange={e => setFormData({ ...formData, noteText: e.target.value })}
        />
      </label>
      <div className='button-bloc'>
        <button type='submit' className='btn-note'>
          <p>{editingNoteId ? "Modify" : "Add"} a note</p>
          <div className='round-container'>
            <div className='plus-sign'></div>
          </div>
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  editingNoteId: PropTypes.string,
  setEditingNoteId: PropTypes.element,
  setShowModal: PropTypes.element,
};

export default Form;
