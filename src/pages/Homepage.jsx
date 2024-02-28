import "../styles/pages/_homepage.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import PostIt from "../components/main-tools/Postit";
import Form from "../components/Form/Form";

function HomePage({ title }) {
  const [data, setData] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [modalToShow, setShowModal] = useState(false);

  const handleEdit = id => {
    setEditingNoteId(id);
    setShowModal(true);
  };

  const handleDelete = id => {
    const updatedNotes = data.filter(note => note.id !== id);
    setData(updatedNotes);
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  useEffect(() => {
    const notesFromLocalStorage =
      JSON.parse(window.localStorage.getItem("notes")) || [];
    setData(notesFromLocalStorage);
  }, [modalToShow]);

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
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>{`You don't have any notes for the moment`}</p>
        )}
      </section>
      {modalToShow && (
        <div className={`modal-modifier-bloc ${modalToShow ? "active" : ""}`}>
          <Form
            setShowModal={setShowModal}
            editingNoteId={editingNoteId}
            setEditingNoteId={setEditingNoteId}
          />
        </div>
      )}
    </>
  );
}

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePage;
