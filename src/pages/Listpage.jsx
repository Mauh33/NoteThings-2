import { useEffect, useState } from "react";
import PostIt from "../components/main-tools/Postit";

function Listpage() {

  const [data, setData] = useState([]);

    let notesFromLocalStorage = window.localStorage.getItem("notes");

    useEffect(() => {

      if (notesFromLocalStorage) {

        const allNotesParsed = JSON.parse(notesFromLocalStorage);
        const notesArray = Object.entries(allNotesParsed).map(([key, value]) => ({ id: key, ...value }));
        setData(notesArray);

      }

    }, [notesFromLocalStorage]);



  return (
    <section className='postIt-section'>
      {data.length > 0 ? (
          data.map((item, index) => (
          <PostIt
            key={index}
            title={item.title}
            description={item.noteText}
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
