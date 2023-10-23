import classes from './education.module.scss';
import ilova2 from '../../assets/ilova2.webp';
import ilova1 from '../../assets/ilova1.webp';
import ilova from '../../assets/ilova.webp';
import najot from '../../assets/najot.webp';
import itexpert from '../../assets/itexpert.webp';
import itlogiya from '../../assets/itlogiya.svg';

const Education = () => {
  return (
    <div className={classes['education']}>
      <h2 className={classes['education-title']}>
        Courses
      </h2>

      <div className={classes['education__content']}>
        <div className="container">
          <div className={classes['education__content-items']}>

            <div
              className={classes['education__content-item']}
              data-aos="fade-left"
              data-aos-duration="2000">
              <div className={classes['education__content-info']}>
                <div className={classes['education__content-left']}>
                  <h2 className={classes['education__content-title']}>
                    "IT EXPERT"
                  </h2>

                  <p className={classes['education__content-year']}>
                    2021 <span>Chirchik</span>
                  </p>

                  <p className={classes['education__content-course']}>
                    Frontend developer
                  </p>
                </div>

                <a href={ilova1} target='_blank' className={classes['education__content-ilova']}>
                  <img src={ilova1} alt="" />
                </a>

                <div className={classes['education__content-imgBox']}>
                  <img src={itexpert} alt="itexpert" />
                </div>
              </div>
            </div>

            <div
              className={classes['education__content-item']}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className={classes['education__content-info']}>
                <div className={classes['education__content-left']}>
                  <h2 className={classes['education__content-title']}>
                    "Najot ta'lim"
                  </h2>

                  <p className={classes['education__content-year']}>
                    2022-2023 <span>Tashkent</span>
                  </p>

                  <p className={classes['education__content-course']}>
                    Full-stack web programming
                  </p>
                </div>

                <a href={ilova} target='_blank' className={classes['education__content-ilova']}>
                  <img src={ilova} alt="" />
                </a>

                <div className={classes['education__content-imgBox']}>
                  <img src={najot} alt="itexpert" />
                </div>
              </div>


            </div>

            <div
              className={classes['education__content-item']}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className={classes['education__content-info']}>
                <div className={classes['education__content-left']}>
                  <h2 className={classes['education__content-title']}>
                    "АЙТИЛОГИЯ"
                  </h2>

                  <p className={classes['education__content-year']}>
                    2023 <span>Minsk</span>
                  </p>

                  <p className={classes['education__content-course']}>
                    Frontend Start
                  </p>
                </div>

                <a href={ilova2} target='_blank' className={classes['education__content-ilova']}>
                  <img src={ilova2} alt="" />
                </a>

                <div className={classes['education__content-imgBox']}>
                  <img src={itlogiya} alt="itlogiya" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;