import { useEffect, useState } from "react";
import "../../styles/components-style/_postIt.scss";

function PostIt({
  title,
  description,
  id
}) {

  const [visibleElement, setVisibility] = useState(true);

  const removeElement = () => {
    const existingNote = JSON.parse(window.localStorage.getItem("notes")) || {};
    delete existingNote[id];
    window.localStorage.setItem("notes", JSON.stringify(existingNote));
    setVisibility(false);
  }

  useEffect(()=> {
    removeElement()
  }, [id])

  return (
    <div className='postIt-bloc'>
      <div className='postIt-title-bloc'>
        <p className='postIt-title'>title :</p>
        <p className=''>{title}</p>
      </div>
      <div className='postIt-description-bloc'>
        <p className='postIt-description'>Task description :</p>
        <br />
        <p className='postIt-description-p'>{description}</p>
      </div>
      <div className="button-bloc">
        <button
          type="button"
          className="btn-note"
          onClick={removeElement}
          >
          <p>delete note</p>
          <div className="round-container">
            <div className="minus-sign"></div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PostIt;
