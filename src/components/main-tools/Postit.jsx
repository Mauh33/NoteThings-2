import { useState } from "react";
import "../../styles/components-style/_postIt.scss";

function PostIt({
  title,
  description,
  id,
  onDelete
}) {

  const [visibleElement, setVisibility] = useState(true);

  const removeElement = () => {
    onDelete(id);
    setVisibility(false);
  };

  if (!visibleElement) {
    return null;
  }

  return (

      <div className='postIt-bloc'>
        <div className='postIt-title-bloc'>
          <p className='postIt-title'>Title :</p>
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
            <p>Delete note</p>
            <div className="round-container">
              <div className="minus-sign"></div>
            </div>
          </button>
        </div>
      </div>


  );
}

export default PostIt;
