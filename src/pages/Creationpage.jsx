import { useState } from "react";
import Form from "../components/Form/Form";
import "../styles/pages/_creationpage.scss";

function Creationpage(title) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className='note-form-section'>
        <h2>{title}</h2>
        <Form setShowModal={setShowModal} />
      </section>
      {showModal && (
        <div className={`dialog-bloc ${showModal ? "active" : ""}`}>
          <dialog className='successModal' open>
            <p className='success-message'>Your note has been sent correctly</p>
            <span className='emote-success'>😃✔️</span>
            <span className='underline'></span>
            <p className='redirection-p'>redirection in progress</p>
            <div className='snippet' data-title='dot-flashing'>
              <div className='stage'>
                <div className='dot-flashing'></div>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}

export default Creationpage;
