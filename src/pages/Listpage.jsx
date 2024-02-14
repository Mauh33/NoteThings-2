import { useEffect, useState } from "react";
import PostIt from "../components/main-tools/Postit";

function Listpage() {

  const [data, setData] = useState([]);

    useEffect(() => {

        const notesFromLocalStorage = JSON.parse(window.localStorage.getItem("notes")) || [];
        setData(notesFromLocalStorage);

    }, []);


  const handleDeleteNote = (noteId) => {
    const updatedNotes = data.filter((note) => note.id !== noteId);
    setData(updatedNotes);
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <section className='postIt-section'>
      {data.length > 0 ? (
          data.map((item) => (
          <PostIt
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.noteText}
            onDelete={handleDeleteNote}
          />
        ))
      )
        : <p>
          You don't have any notes for the moment
          </p>
    }
    </section>
  )}

  export default Listpage;
