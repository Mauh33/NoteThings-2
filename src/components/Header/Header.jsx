import "../../styles/components-style/_header.scss";
import { useState, useCallback, useEffect } from 'react';
import { useStateContext } from "../../utils/DispatcherContext.jsx"
import ArrowBack from "../../assets/arrow_back.png"
import { Link } from "react-router-dom";

export default function Header() {

  const {
    isLinkVisible,
    setLinkVisibility,
  } = useStateContext();


  const toggleLinkVisibility = () => {
    setLinkVisibility(!isLinkVisible);
  };


  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, [updateScreenWidth]);

  return (
    <>
      <header className='header'>
        <h1>
          <Link to='/list-of-notes'>NoteThings</Link>
        </h1>
        <div className='collapse-bloc'>
        {screenWidth <= 426 ? (
          <div className='collapse-element'>
            <div className='arrow-bloc'>
              <img
                className={`${
                  isLinkVisible ? "toggle-open" : "toggle-close"
                }`}
                src={ArrowBack}
                alt=''
                onClick={toggleLinkVisibility}
              />
            </div>
            <nav className={`link-bloc ${isLinkVisible ? "" : "hide"}`}>
              <li>
            <Link className="creation-link">lorem ipsum link</Link>
              </li>
              <li>
            <Link className='creation-link' to='/creation-of-note'>
              Go to creation note page
            </Link>
              </li>
            </nav>
          </div>
        ) : (
          <nav className="link-bloc">
            <ul>
              <li>
          <Link className="creation-link">
          lorem ipsum link
        </Link>
              </li>
              <li>
          <Link className='creation-link' to='/creation-of-note' onClick={toggleLinkVisibility}>
          Go to creation note page
        </Link>
              </li>
        </ul>
          </nav>
        )}
      </div>
      </header>
    </>
  );

}
