import React from 'react'
import { Link } from 'react-router-dom';
import classes from './nav.module.scss';

const Nav = () => {
  return (
    <header className={classes["back"]}>
      <div className="container">
        <nav className={classes["back__content"]}>

          <Link to="/"
            className={classes["back__content-logo"]}
          >
            <i className="fa-solid fa-hand-point-left"></i>
            <p>HOME</p>
          </Link>

          <Link to="/portfolio"
            className={classes["back__content-logo"]}
          >
            <i className="fa-solid fa-suitcase"></i>
            <p>PORTFOLIO</p>
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Nav;