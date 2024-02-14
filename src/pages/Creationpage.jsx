import React from 'react';
import { useStateContext } from "../utils/DispatcherContext";
import "../styles/pages/_creationpage.scss";
import "../styles/components-style/_btn.scss";
import FormNote from "../components/Form/Formnote";

function Creationpage({title}) {

  const {
    isFormVisible,
    setFormVisibility,
  } = useStateContext();


  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  const handleAddNote = (newNote) => {

      const existingNotes = JSON.parse(window.localStorage.getItem("notes")) || [];
      const updatedNotes = [...existingNotes, newNote];
      window.localStorage.setItem("notes", JSON.stringify(updatedNotes));
      console.log("New note added:", newNote);
  };

  return (
    <>
    <section className='note-form-section'>
      <h2>{title}</h2>
      <div className='button-bloc'>
            <button
              type='button'
              className='btn-note'
              onClick={toggleFormVisibility}
            >
              <p>Create a note</p>
              <div className='round-container'>
                <div className='plus-sign'></div>
              </div>
            </button>
          </div>
      {isFormVisible && <FormNote onAdd={handleAddNote} />}
    </section>
  </>
  )
}

export default Creationpage;
