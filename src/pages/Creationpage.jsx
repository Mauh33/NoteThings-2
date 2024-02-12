import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useStateContext } from "../utils/DispatcherContext";
import FormNote from "../components/Form/Formnote";
import "../styles/pages/_creationpage.scss";
// import "../../styles/components-style/_btn.scss";
// import ArrowBack from "../../assets/arrow_back.png";

function Creationpage({title}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const {
    isButtonVisible,
    isFormVisible,
    setButtonVisibility,
    setFormVisibility,
  } = useStateContext();

  const toggleButtonVisibility = () => {
    setButtonVisibility(!isButtonVisible);
  };

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };


  const updateScreenWidth = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, [updateScreenWidth]);


  return (
    <>
    <section className='note-form-section'>
        <h2>{title}</h2>
        {isFormVisible ? <FormNote /> : " "}
      </section>
      <div className='collapse-bloc'>
        {screenWidth <= 426 ? (
          <div className='collapse-element'>
            <div className='arrow-bloc'>
              <img
                className={`${
                  isButtonVisible ? "toggle-open" : "toggle-close"
                }`}
                src={ArrowBack}
                alt=''
                onClick={toggleButtonVisibility}
              />
            </div>
            <div className={`button-bloc ${isButtonVisible ? "" : "hide"}`}>
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
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
}

export default Creationpage;
