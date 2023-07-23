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
      text: `Maqsadim: Dasturlash yo'nalishida katta yutuqlarga erishish va nomdor dasturchi bo'lish. Bilganlarimni ulashish, bilmaganlarimni o'rganish.
      Dasturlash orqali moliyaviy erkinlikka erishish.`,
      img: 'darts.webp'
    },
    {
      id: 2,
      text: `Qiziqishlarim: yangi texnologiyalar o'rganish, ish jarayonida duch keladigan masalalarga yechim topish, dasturlash olamidagi yangiliklardan xabardor bo'lish.`,
      img: 'code.webp'
    },
    {
      id: 3,
      text: `Hobbiyim: musiqa eshitib kod yozish, dasturlashga odi videolar ko'rish, avtomobillarni o'rganish va boshqalar.`,
      img: 'hobby.webp'
    },
    {
      id: 4,
      text: `1994-yil 3-yanvar kuni Far'g'ona viloyatida tug'ilganman. 1996-yildan beri Toshkent viloyati Chirchiq shahrida istiqomat qilaman.`,
      img: 'sardor02.webp'
    },
    {
      id: 5,
      text: `2001-yil Chirchiq shahar 11-sonli o'rta umumta'lim maktabiga borib, 2010-yil maktabni a'lo baholarga tamomlaganman. 8-9 sinflarda informatika fanidan olimpiadalarda ishtirok etib, Viloyat bosqichlariga chiqqanman.`,
      img: 'school.webp'
    },
    {
      id: 6,
      text: `2010-yil Chirchiq sanoat kasb-hunar kollejining "Avtomobillarga texnik-xizmat ko'rsatish" yo'nalishi bo'yicha o'qishga kirib, o'qishni 2013-yil a'lo baholarga tamomlaganman.`,
      img: 'college.webp'
    },
    {
      id: 7,
      text: `2014-yil "Петербургский государственный университет путей сообщения Императора Александра I" universitetining "Строительство железных дорог, мостов и транспортных тоннелей" fakultetiga o'qishga kirdim.`,
      img: 'pgups.webp'
    },
    {
      id: 8,
      text: `2013-yildan 2020-yilgacha Sankt-Peterburgda yashab ishladim`,
      img: 'spb.webp'
    },
    {
      id: 9,
      text: `2020-yil yakunida O'zbekistonga qaytib kelib 2021-yildan 2022-yilni boshigacha "ElektroSetMontaj" firmasida ish boshqaruvchi lavozimida ishladim. Ishdan bo'sh vaqtim "IT-Expert" o'quv markazida frontendni o'rganishni boshladim.`,
      img: 'uzbmap.webp'
    },
    {
      id: 10,
      text: `2022-yilning noyabr oyida Najot Ta'lim o'quv markazining Full-stack dasturlash" yo'nalishiga o'qishga kirdim va hamma imtihonlardan eng yuqori o'rinlarda o'tdim.`,
      img: 'nt.webp'
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

            <h2>Davomi endi yoziladi...😉 </h2>
          </div>

        </div>
      </div>
      <Top />
    </div>
  );
};

export default About;