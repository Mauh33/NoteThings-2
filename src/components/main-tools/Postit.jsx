import { useEffect, useState } from "react";
import "../../styles/components-style/_postIt.scss";

function PostIt({
  title,
  description,
  id
}) {

  const [visibleElement, setVisibility] = useState(true);
  const existingNote = JSON.parse(window.localStorage.getItem("notes")) || {};

  const removeElement = (postId) => {

    console.log("on rentre ?");
    const updatedNote = {...existingNote};
    delete updatedNote[postId];
    window.localStorage.setItem("notes", JSON.stringify(updatedNote));
    setVisibility(!visibleElement);

  }

  useEffect(()=> {

    if (id && existingNote[id]) {
    removeElement()
    }
  }, [id])

      if(!existingNote[id]) {
        return null;
      }

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
          onClick={() => removeElement(id)}
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
