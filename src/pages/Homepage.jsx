import "../styles/pages/_homepage.scss";
import { useEffect, useState } from "react";
import PostIt from "../components/main-tools/Postit";

function HomePage({ title }) {
  const [data, setData] = useState([]);

  const handleDeleteNote = noteId => {
    const updatedNotes = data.filter(note => note.id !== noteId);
    setData(updatedNotes);
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));
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
            />
          ))
        ) : (
          <p>You don't have any notes for the moment</p>
        )}
      </section>
    </>
  );
}

export default HomePage;
