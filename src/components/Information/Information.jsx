import React from 'react';
import classes from './information.module.scss';

const Information = () => {
  return (
    <div className={classes['information']}>
      <div className="container">

        <div className={classes['information__content']}>

          <div className={classes['information__content-box']}>
            <div className={classes['information__content-item']}>
              <p className={classes['information__content-title']}>
                Name
              </p>
              <h2 className={classes['information__content-text']}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Sardor
              </h2>
            </div>

            <div className={classes['information__content-item']}>
              <p className={classes['information__content-title']}>
                Surname
              </p>
              <h2 className={classes['information__content-text']}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Yuldashev
              </h2>
            </div>

            <div className={classes['information__content-item']}>
              <p className={classes['information__content-title']}>
                Age
              </p>
              <h2 className={classes['information__content-text']}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                {new Date().getFullYear() - 1994}
              </h2>
            </div>
          </div>

          <div className={classes['information__content-box']}>
            <div className={classes['information__content-item']}>
              <p className={classes['information__content-title']}>
                Profession
              </p>
              <h2 className={classes['information__content-text']}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                Developer
              </h2>
            </div>

            <div className={classes['information__content-item']}>
              <p className={classes['information__content-title']}>
                Specialism
              </p>
              <h2 className={classes['information__content-text']}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="800"
                data-aos-delay="600"
                data-aos-offset="0"
              >
                Full-stack
              </h2>
            </div>
          </div>

          <div className={classes['information__content-box']}>
            <div className={classes['information__content-item']}>
              <p className={classes['information__content-title']}>
                Location
              </p>
              <h2 className={classes['information__content-text']}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Tashkent region
              </h2>
            </div>

            <div className={classes['information__content-item']}>
              <p className={classes['information__content-title']}>
                Languages
              </p>
              <h2 className={classes['information__content-text']}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                UZ / RU / EN
              </h2>
            </div>

            <div className={classes['information__content-item']}>
              <p className={classes['information__content-title']}>
                Education
              </p>
              <h2 className={classes['information__content-text']}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                Secondary
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;