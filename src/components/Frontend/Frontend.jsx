import React from 'react';
import classes from './frontend.module.scss';
import Slider from '../Slider/';

const Frontend = () => {
  return (
    <div className={classes['frontend']} id='frontend'>
      <h2 className={classes['frontend-title']}>
        Frontend jobs
      </h2>

      <Slider />
    </div>
  );
};

export default Frontend;