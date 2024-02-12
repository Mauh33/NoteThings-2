import { useState } from "react";
import "../../styles/components-style/_formNote.scss";

function FormNote() {

  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title;
    const noteText = e.target.noteText;
    setData(values => ({...values, [title]: noteText}))
  }

  return (
    <form action="" method="get" className="form-bloc">
      <label >
        A title for your note :
      <input
        type="text"
        name="title"
        value={title}
        placeholder="filter email"
        onChange={(e) => setData(e.target.title)}
        />
      </label>
      <label >
        A description for your note :
      <textarea
        placeholder="do category to sort email topic"
        name="text"
        value={noteText}
        onChange={(e) => setData(e.target.noteText)}
      >
      </textarea>
      </label>
      <div className="button-bloc">
          <button type="submit" className="btn-note">
          <p>Add a note</p>
            <div className="round-container">
              <div className="plus-sign"></div>
            </div>
          </button>
        </div>
    </form>
  );
}

export default FormNote;
