import "../../styles/components-style/_formNote.scss";

function FormNote() {
  return (
    <form action="" method="get" className="form-bloc">
      <label >
        A title for your note :
      <input type="text" name="" id="" placeholder="filter email"/>
      </label>
      <label >
        A description for your note :
      <textarea placeholder="do category to sort email topic">
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
