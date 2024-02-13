import { useEffect, useState } from "react";
import PostIt from "../components/main-tools/Postit";

function Listpage() {

  const [data, setData] = useState([]);

    useEffect(() => {

      const notesFromLocalStorage = JSON.parse(window.localStorage.getItem("notes"));

      if (notesFromLocalStorage) {

        const notesArray = Object.entries(notesFromLocalStorage).map(([key, value]) => ({ id: key, ...value }));
        setData(notesArray);

      }

    }, []);

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
  );
}

export default Listpage;
