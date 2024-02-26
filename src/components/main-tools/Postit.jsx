import { useState } from "react";
import "../../styles/components-style/_postIt.scss";

function PostIt({ title, description, id, onDelete, onModify }) {
  const [visibleElement, setVisibility] = useState(true);

  const removeElement = () => {
    onDelete(id);
    setVisibility(false);
  };

  const modifyElement = () => {
    onModify(id);
  };

  if (!visibleElement) {
    return null;
  }

  return (
    <div className='postIt-bloc'>
      <div className='postIt-title-bloc'>
        <p className='postIt-title-p'>{title}</p>
      </div>
      <div className='postIt-description-bloc'>
        <p className='postIt-description-p'>{description}</p>
      </div>
      <div className='btn-group'>
        <div className='button-bloc'>
          <button type='button' className='btn-note' onClick={modifyElement}>
            <p>Modify note</p>
            <div className='round-container'>
              <div>
                <i className='fa fa-edit'></i>
              </div>
            </div>
          </button>
        </div>
        <div className='button-bloc'>
          <button type='button' className='btn-note' onClick={removeElement}>
            <p>Delete note</p>
            <div className='round-container'>
              <div className='minus-sign'></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostIt;
