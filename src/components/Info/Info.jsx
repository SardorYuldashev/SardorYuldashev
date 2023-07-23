import React from 'react';
import classes from './info.module.scss';

const Info = () => {
  return (
    <div className={classes['info']} id='info'>
      <div className="container">
        <div className={classes['info__content']}>
          <div className={classes['info__content-information']}
            data-aos="fade-down"
            data-aos-duration="2000"
          >

            <h1 className={classes['info__content-title']}>
              Yuldashev Sardor
            </h1>

            <h1 className={classes['info__content-subtitle']}>
              Full-stack developer
            </h1>

            <ul className={classes['info__content-social']}>
              <li className={classes['info__content-social-li']}>
                <a className={classes['info__content-social-link']}
                  href="https://www.t.me/sardor_bek_yuldashev/"
                  target='_blank'
                >

                  <i className="fa-brands fa-telegram"></i>
                </a>
              </li>

              <li className={classes['info__content-social-li']}>
                <a className={classes['info__content-social-link']}
                  href="https://www.instagram.com/sardor_bek_yuldashev/"
                  target='_blank'
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li className={classes['info__content-social-li']}>
                <a className={classes['info__content-social-link']}
                  href="https://github.com/SardorYuldashev"
                  target='_blank'
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>

              <li className={classes['info__content-social-li']}>
                <a className={classes['info__content-social-link']}
                  href="https://www.linkedin.com/in/sardoryuldashev/v"
                  target='_blank'
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>

            </ul>
          </div>

          <img className={classes['info__content-photo']}
            src="avatar.webp"
            alt=""
            data-aos="fade-up"
            data-aos-duration="2000"
          />


        </div>
      </div>
    </div>
  )
}

export default Info