import React from 'react';
import { Link } from 'react-router-dom';
import classes from './notFound.module.scss';

const NotFound = () => {

  return (
    <div className={classes['error']}>
      <div className="container">
        <div className={classes['error__content']}>
          <h2 className={classes['error__content-title']}>
            UPS... Page not found!
          </h2>

          <Link to='/' className={classes['error__content-link']}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;