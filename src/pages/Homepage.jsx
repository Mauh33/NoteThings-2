import "../styles/pages/_homepage.scss";
import { useEffect, useState } from "react";
import PostIt from "../components/main-tools/Postit";

function HomePage({ title }) {
  const [data, setData] = useState([]);
  const [showModifyModal, setShowModal] = useState(false);

  const handleDeleteNote = noteId => {
    const updatedNotes = data.filter(note => note.id !== noteId);
    setData(updatedNotes);
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleModifyNote = noteId => {
    const updatedNotes = data.filter(note => note.id == noteId);
    if (updatedNotes) {
      setShowModal(true);
    }
    console.log("récupération de la note", updatedNotes);
  };

  const handleModifySubmit = e => {
    e.preventDefault();
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
              onModify={handleModifyNote}
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
              your title's note :
              <input
                type='text'
                name='title'
                id='title'
                value={data.title}
                placeholder='Enter title'
                minLength={5}
                maxLength={30}
                onChange={e => setData({ ...data, title: e.target.value })}
              />
            </label>
            <label>
              A description for your note:
              <textarea
                placeholder='Enter description'
                name='text'
                value={data.noteText}
                minLength={10}
                maxLength={120}
                onChange={e => setData({ ...data, noteText: e.target.value })}
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
