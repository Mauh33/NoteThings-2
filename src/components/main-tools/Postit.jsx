import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/components-style/_postIt.scss";
import "../../styles/components-style/_btn.scss";

function PostIt({ title, description, id, onEdit, onDelete }) {
  const [visibleElement, setVisibility] = useState(true);

  const handleEdit = () => {
    onEdit(id);
  };

  const handleDelete = () => {
    onDelete(id);
    setVisibility(false);
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
          <button type='button' className='btn-note' onClick={handleEdit}>
            <p>Modify note</p>
            <div className='round-container'>
              <div>
                <i className='fa fa-edit'></i>
              </div>
            </div>
          </button>
        </div>
        <div className='button-bloc'>
          <button type='button' className='btn-note' onClick={handleDelete}>
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

PostIt.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default PostIt;
