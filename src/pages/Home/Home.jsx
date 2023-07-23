import React from 'react';
import classes from './home.module.scss';
import { Link } from 'react-router-dom';
import resume from '../../assets/resume.pdf';

const Home = () => {
  return (
    <div>
      <h1 className={classes['home']}>
        <div className="container">
          <div className={classes['home__content']}>
            <Link
              to='/portfolio'
              className={classes['home__content-item']}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <i className="fa-solid fa-suitcase"></i>
              <p>PORTFOLIO</p>
            </Link>

            <a
              href={resume}
              target='_blank'
              className={classes['home__content-item']}
            >
              <i className="fa-solid fa-file-pdf"></i>
              <p>
                RESUME
              </p>
            </a>

            <a href='tel: +998903928068'
              to='/portfolio'
              className={classes['home__content-item']}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <i className="fa-solid fa-square-phone"></i>
              <p>CONTACT</p>
            </a>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Home;