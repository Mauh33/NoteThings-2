import "../../styles/components-style/_header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className='header'>
        <h1>
          <Link to='/'>NoteThings</Link>
        </h1>
        <input type='checkbox' id='menuToggle' className='menuToggleCheckbox' />
        <label htmlFor='menuToggle' className='menuToggleLabel'>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav className='navigation'>
          <ul className='menu'>
            <li>
              <Link className='link' to='/creation-of-note'>
                Go to creation note page
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
