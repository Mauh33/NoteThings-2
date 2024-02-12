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
      {isFormVisible && <FormNote />}
    </section>
  </>
  )
}

export default Creationpage;
