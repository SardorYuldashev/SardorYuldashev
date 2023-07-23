import React from 'react';
import classes from './footer.module.scss';
import { Link } from 'react-router-dom';
import resume from '../../assets/resume.pdf';

const Footer = () => {
  return (
    <div className={classes['footer']}>
      <div className="container">
        <div className={classes['footer__content']}>

          <ul className={classes['footer__content-list']}>
            <li className={classes['footer__content-li']}>
              <Link
                to='/'
                className={classes['footer__content-link']}
              >
                Home
              </Link>
            </li>

            <li className={classes['footer__content-li']}>
              <a
                href={resume}
                target='_blank'
                className={classes['footer__content-link']}
              >
                Resume
              </a>
            </li>

            <li className={classes['footer__content-li']}>
              <Link
                to='/about'
                className={classes['footer__content-link']}
              >
                About me
              </Link>
            </li>

            <li className={classes['footer__content-li']}>
              <a
                href='#frontend'
                className={classes['footer__content-link']}
              >
                Frontend
              </a>
            </li>

            <li className={classes['footer__content-li']}>
              <a
                href='#backend'
                className={classes['footer__content-link']}
              >
                Backend
              </a>
            </li>

          </ul>

          <ul className={classes['footer__content-social']}>
            <li className={classes['footer__content-li']}>
              <a href="https://www.t.me/sardor_bek_yuldashev/"
                className={classes['footer__content-logo']}
                target='_blank'
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </li>

            <li className={classes['footer__content-li']}>
              <a href="https://www.instagram.com/sardor_bek_yuldashev/"
                className={classes['footer__content-logo']}
                target='_blank'
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li className={classes['footer__content-li']}>
              <a href="https://www.linkedin.com/in/sardoryuldashev/v"
                className={classes['footer__content-logo']}
                target='_blank'
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>

            <li className={classes['footer__content-li']}>
              <a href="https://github.com/SardorYuldashev"
                className={classes['footer__content-logo']}
                target='_blank'
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>

            <li className={classes['footer__content-li']}>
              <a href="mailto: henkook-baron@mail.ru"
                className={classes['footer__content-logo']}
              >
                <i className="fa-brands fa-at"></i>
              </a>
            </li>

            <li className={classes['footer__content-li']}>
              <a href="tel: +998903928068"
                className={classes['footer__content-logo']}
              >
                <i className="fa-solid fa-square-phone"></i>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Footer;