import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import language from '../language';

function Navbar(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="nav col-4">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="menu d-flex col-8">
            <li className={props.home}>
              <i className="fa-solid fa-house"></i>
              <Link to="/">
                <a>{language.en.home}</a>
              </Link>
            </li>
            <li className={props.ticket}>
              <i className="fa-solid fa-ticket fa-rotate-90"></i>
              <Link to="/ticket">
                <a>{language.en.ticket}</a>
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-caret-up fa-rotate-90"></i>{' '}
              <a href="https://digitalconclave.org/" target="_blank" rel="noopener noreferrer">
                {language.en.website}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
