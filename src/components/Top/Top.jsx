import React from 'react';
import classes from './top.module.scss'

const Top = () => {
  return (
    <a href="#top"
      className={classes['top']}
    >
      <i className="fa-solid fa-chevron-up"></i>
      <p>TO TOP</p>
    </a>
  );
};

export default Top;