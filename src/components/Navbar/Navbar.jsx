import { Link } from 'react-router-dom';
import classes from './navbar.module.scss';

const Navbar = () => {
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

          <a href='#pet'
            className={classes["back__content-logo"]}
          >
            <i className="fa-solid fa-clipboard-check"></i>
            <p>PET PROJECTS</p>
          </a>

          <a href='#backend'
            className={classes["back__content-logo"]}
          >
            <i className="fa-solid fa-server"></i>
            <p>BACKEND</p>
          </a>

          <a href='#frontend'
            className={classes["back__content-logo"]}
          >
            <i className="fa-solid fa-display"></i>
            <p>FRONTEND</p>
          </a>

          <Link to="/about"
            className={classes["back__content-logo"]}
          >
            <i className="fa-solid fa-address-card"></i>
            <p>ABOUT ME</p>
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;