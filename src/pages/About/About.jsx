import React from 'react';
import Nav from '../../components/Nav';
import Top from '../../components/Top';
import classes from './about.module.scss';
import mark1 from '../../assets/mark1.webp';
import mark2 from '../../assets/mark2.webp';
import sardor01 from '../../assets/sardor01.webp';
import loader from '../../assets/loader.gif';

const About = () => {
  const info = [
    {
      id: 1,
      text: `My goal: To make great progress in programming and become a famous programmer. Sharing what I know, learning what I don't know.
      Achieving financial freedom through programming.`,
      img: 'darts.webp'
    },
    {
      id: 2,
      text: `My interests: learning new technologies, finding solutions to problems encountered in the work process, being aware of the news in the world of programming.`,
      img: 'code.webp'
    },
    {
      id: 3,
      text: `Hobbies: coding while listening to music, watching programming videos, studying cars, etc.`,
      img: 'hobby.webp'
    },
    {
      id: 4,
      text: `I was born on January 3, 1994 in Fergana region. Since 1996, I have been living in Chirchik, Tashkent region.`,
      img: 'sardor02.webp'
    },
    {
      id: 5,
      text: `In 2001, I went to secondary school No. 11 in Chirchik city, and in 2010 I graduated with excellent grades. In the 8th-9th grades, I participated in the Olympiads in informatics and reached the regional stages.`,
      img: 'school.webp'
    },
    {
      id: 6,
      text: `In 2010, I entered the Chirchik Industrial Vocational College, majoring in "Technical maintenance of automobiles", and graduated with honors in 2013..`,
      img: 'college.webp'
    },
    {
      id: 7,
      text: `In 2014, I entered the faculty of "Construction of railways, bridges and transport tunnels" at the "Saint-Petersburg State University of Transport of Emperor Alexander I".`,
      img: 'pgups.webp'
    },
    {
      id: 8,
      text: `From 2013 to 2020, I lived and worked in Saint-Petersburg`,
      img: 'spb.webp'
    },
    {
      id: 9,
      text: `At the end of 2020, I returned to Uzbekistan and from 2021 to the beginning of 2022 I worked as a manager at the "ElektroSetMontaj" company. In my spare time, I started learning frontend at the education center "IT-Expert".`,
      img: 'uzbmap.webp'
    },
    {
      id: 10,
      text: `In November 2022, I enrolled in the "Full-stack web programming" course of the "Najot ta'lim" education center and passed all the exams with the highest marks.`,
      img: 'nt.webp'
    },
    {
      id: 11,
      text: `I completed the course in October 2023 and was awarded a certificate.`,
      img: 'sertificate_nt.webp'
    },
    {
      id: 12,
      text: `Now I'm looking for a job and I hope I'm the person you're looking for.`,
      img: 'job.webp'
    },
  ];

  return (
    <div className={classes['about']}>
      <Nav />
      <div className="container">
        <div className={classes['about__content']}>

          <div className={classes['about__content-box']}>
            <div className={classes['about__content-avatarBox']}>
              <img src={sardor01}
                alt="sardor"
                className={classes['about__content-avatar']}
              />
            </div>

            <h2>Yuldashev <span>Sardor Abdusalim</span>  o'g'li</h2>
          </div>

          {
            info.map(item => {
              if (item.id % 2 === 1) {
                return <div key={item.id} className={classes['about__content-item']}>
                  <img src={mark2}
                    alt="mark"
                    className={classes['about__content-mark']}
                  />

                  <div className={classes['about__content-info']}>
                    <div className={classes['about__content-information']}>
                      <p>
                        {item.text}
                      </p>
                    </div>

                    <div className={classes['about__content-imgBox']}>
                      <img
                        src={item.img}
                        alt="picture"

                        data-aos="zoom-in"
                        data-aos-duration="2000"
                      />
                    </div>
                  </div>
                </div>
              } else if (item.id % 2 === 0) {
                return <div key={item.id} className={classes['about__content-item']}>
                  <img src={mark1}
                    alt="mark"
                    className={classes['about__content-mark']}
                  />

                  <div className={classes['about__content-info']}>
                    <div className={classes['about__content-imgBox']}>
                      <img
                        src={item.img}
                        alt="picture"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                      />
                    </div>

                    <div className={classes['about__content-information']}>
                      <p>
                        {item.text}
                      </p>
                    </div>

                  </div>
                </div>
              }
            })
          }

          <div className={classes['about__content-box']}>
            <div className={classes['about__content-avatarBox']}>
              <img src={loader}
                alt="sardor"
                className={classes['about__content-avatar']}
              />
            </div>

            <h2>to be continued...</h2>
          </div>

        </div>
      </div>
      <Top />
    </div>
  );
};

export default About;