import "../../styles/components-style/_header.scss";
import ArrowBack from "../../assets/arrow_back.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className='header'>
        <h1>
          <Link to='/'>NoteThings</Link>
        </h1>
        <div className='menuToggle'>
          <input type='checkbox' name='' id='' />
          <span></span>
          <span></span>
          <span></span>
        </div>
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
