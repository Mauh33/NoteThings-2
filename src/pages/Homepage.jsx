import "../styles/pages/_homepage.scss";
import { useEffect, useState } from "react";
import PostIt from "../components/main-tools/Postit";

function HomePage({ title }) {
  const [data, setData] = useState([]);
  const [showModifyModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const handleDeleteNote = noteId => {
    const updatedNotes = data.filter(note => note.id !== noteId);
    setData(updatedNotes);
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const waitForANoteChange = noteId => {
    const noteToEdit = data.find(note => note.id == noteId);
    if (noteToEdit) {
      setEditingNote(noteToEdit);
      setShowModal(true);
    }
    console.log("récupération de la note", noteToEdit);
  };

  const handleModifySubmit = e => {
    e.preventDefault();

    const indexOfNote = data.findIndex(note => note.id === editingNote.id);
    if (indexOfNote !== -1) {
      const updatedNote = [...data];
      updatedNote[indexOfNote] = editingNote;
      setData(updatedNote);
      window.localStorage.setItem("notes", JSON.stringify(updatedNote));
    }

    setTimeout(() => {
      setShowModal(false);
    }, 1000);

    setEditingNote(null);
  };

  useEffect(() => {
    const notesFromLocalStorage =
      JSON.parse(window.localStorage.getItem("notes")) || [];
    setData(notesFromLocalStorage);
  }, []);

  return (
    <>
      <section className='postIt-section'>
        <h2>{title}</h2>
        {data.length > 0 ? (
          data.map(item => (
            <PostIt
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.noteText}
              onDelete={handleDeleteNote}
              onModify={waitForANoteChange}
            />
          ))
        ) : (
          <p>You don't have any notes for the moment</p>
        )}
      </section>
      {showModifyModal && (
        <div
          className={`modal-modifier-bloc ${showModifyModal ? "active" : ""}`}
        >
          <form
            method='post'
            className='form-bloc'
            onSubmit={handleModifySubmit}
          >
            <label>
              <p>your title's note :</p>
              <input
                type='text'
                name='title'
                id='title'
                value={data.title}
                placeholder='Enter title'
                minLength={5}
                maxLength={30}
                onChange={e =>
                  setEditingNote({ ...editingNote, title: e.target.value })
                }
              />
            </label>
            <label>
              <p>A description for your note:</p>
              <textarea
                placeholder='Enter description'
                name='text'
                value={data.noteText}
                minLength={10}
                maxLength={120}
                onChange={e =>
                  setEditingNote({ ...editingNote, noteText: e.target.value })
                }
              />
            </label>
            <div className='button-bloc'>
              <button type='submit' className='btn-note'>
                <p>Submit</p>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default HomePage;
