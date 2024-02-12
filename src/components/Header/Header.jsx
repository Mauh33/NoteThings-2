import "../../styles/components-style/_header.scss";
import {Link} from "react-router-dom";

export default function Header() {

  return (
    <header className='header'>
      <h1>
        <Link to="/list-of-notes">
          NoteThings
        </Link>
      </h1>
      <Link to="/creation-of-note">Go to creation note page</Link>
    </header>
  );
}
