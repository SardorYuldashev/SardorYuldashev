import React from 'react';
import classes from './backend.module.scss';
import server from '../../assets/server.gif';
import backend from '../../assets/lists/backend'
import { useState } from 'react';

const Backend = () => {
  const [start, setStart] = useState(0);
  const jobs = backend.slice(start * 3, start * 3 + 3);
  const pagesArr = [];
  for (let i = 0; i < Math.ceil((backend.length / 3)); i++) {
    pagesArr.push(i + 1);
  };

  function clickPage(e) {
    setStart(+e.target.textContent - 1);
  };

  return (
    <div className={classes['backend']} id='backend'>
      <div className="container">
        <div className={classes['backend__content']}>
          <h2 className={classes['backend__content-title']}>
            Backend jobs
          </h2>

          <div className={classes['backend__content-pagenation']}>
            {
              pagesArr.map((item) => (
                <div
                  key={item}
                  className={classes['backend__content-page']}
                  onClick={clickPage}
                >
                  {item}
                </div>
              ))
            }
          </div>

          {jobs.map(item => {
            return <a href={item.url}
              key={item.id}
              className={classes['backend__content-card']}
              target='_blank'
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img className={classes['backend__content-img']}
                src={server} alt="uzor" />

              <div className={classes['backend__content-info']}>
                <h2>{item.title}</h2>
                <div>
                  {item.techs.map(tag => {
                    return <img
                      key={tag}
                      className={classes['backend__content-logo']}
                      src={tag}
                      alt={tag}
                    />
                  })}
                </div>
              </div>
            </a>
          })}

        </div>
      </div>
    </div>
  );
};

export default Backend;