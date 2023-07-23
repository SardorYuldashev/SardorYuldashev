import Carousel from 'react-bootstrap/Carousel';
import classes from './slider.module.scss';
import mac from '../../assets/macfront.webp';

function Slider() {
  const jobs = [
    {
      id: 1,
      image: 'portfolio.webp',
      title: 'Old Portfolio',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas', 'Keyframes', 'Popup', 'and other'],
      url: 'https://sardoryuldashev.github.io/Portfolio/'
    },
    {
      id: 2,
      image: 'techzone.webp',
      title: 'TechZone',
      technologies: ['HTML5', 'CSS3', 'Keyframes', 'Popup', 'and other'],
      url: 'https://sardoryuldashev.github.io/TechZone/'
    },
    {
      id: 3,
      image: 'uzb.webp',
      title: 'Uzbekistan',
      technologies: ['HTML5', 'CSS3', 'SVG interactive map', 'and other'],
      url: 'https://sardoryuldashev.github.io/Uzbekistan/'
    },
    {
      id: 4,
      image: 'bookshelter.webp',
      title: 'Bookshelter',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'and other'],
      url: 'https://exam-bookshelter.netlify.app/'
    },
    {
      id: 5,
      image: 'mario.webp',
      title: 'Mario animation',
      technologies: ['HTML5', 'CSS3', 'Keyframes', 'JavaScript', 'SetTimeOut'],
      url: 'https://sardoryuldashev.github.io/Mario/'
    },
    {
      id: 6,
      image: 'mymemories.webp',
      title: 'MyMemories',
      technologies: ['HTML5', 'CSS3', 'JavaScript', "log in through reqres.io", 'and other'],
      url: 'https://site-my-memories.netlify.app/'
    },
    {
      id: 7,
      image: 'formen.webp',
      title: 'for Men',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'MockData'],
      url: 'https://sardoryuldashev.github.io/forMen/'
    },
    {
      id: 8,
      image: 'odinodi.webp',
      title: 'ODInODI',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Keyframes', 'and other'],
      url: 'https://sardoryuldashev.github.io/ODInODI/'
    }, 
    {
      id: 9,
      image: 'cardrive.webp',
      title: 'Car Drive',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Keyframes', 'and other'],
      url: 'https://car-drive.netlify.app/'
    },       
    {
      id: 10,
      image: 'coral.webp',
      title: 'Coral',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'FakeStore'],
      url: 'https://sardoryuldashev.github.io/Coral/'
    },
    {
      id: 11,
      image: 'webshop.webp',
      title: 'WebShop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Basket imitation'],
      url: 'https://shopproducts.netlify.app/'
    },    
    {
      id: 12,
      image: 'dreamHouse.webp',
      title: 'Dream House',
      technologies: ['HTML5', 'CSS3', 'SVG interavtive map', 'integrate 3D model'],
      url: 'https://sardoryuldashev.github.io/Dream-House/'
    },
    {
      id: 13,
      image: 'chat.webp',
      title: 'Chat',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      url: 'https://sardoryuldashev.github.io/Chat/'
    },
    {
      id: 14,
      image: 'restaurant.webp',
      title: 'Restaurant',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      url: 'https://sardoryuldashev.github.io/Restaurant/'
    },
  ];

  return (
    <Carousel className={classes['slider']}>

      {jobs.map(card => {
        if (card.id % 2 === 1) {
          return <Carousel.Item key={card.id} interval={2000} className={classes['slider__content']}>
            <a href={card.url} target='_blank' className={classes['slider__item']}>
              <div className={classes['slider__item-card']}>

                <div className={classes['slider__item-imgBox']}>
                  <img className={classes['slider__item-img']}
                    src={mac}
                    alt="First slide"
                  />

                  <div className={classes['slider__item-imgWallBox']}>
                    <img className={classes['slider__item-imgWall']}
                      src={card.image}
                      alt={card.title}
                    />
                  </div>
                </div>

                <div className={classes['slider__item-info']}>
                  <ul>
                    <h2 className={classes['slider__item-title']}>
                      {card.title}
                    </h2>
                    {card.technologies.map(item => {
                      return <li key={item} className={classes['slider__item-text']}>
                        {item}
                      </li>
                    })}
                  </ul>
                </div>
              </div>

            </a>
          </Carousel.Item>
        } else {
          return <Carousel.Item key={card.id} interval={2000} className={classes['slider__content']}>
            <a href={card.url} target='_blank' className={classes['slider__item']}>
              <div className={classes['slider__item-card']}>

                <div className={classes['slider__item-info']}>
                  <ul>
                    <h2 className={classes['slider__item-title']}>
                      {card.title}
                    </h2>
                    {card.technologies.map(item => {
                      return <li key={item} className={classes['slider__item-text']}>
                        {item}
                      </li>
                    })}
                  </ul>
                </div>

                <div className={classes['slider__item-imgBox']}>
                  <img className={classes['slider__item-img']}
                    src={mac}
                    alt="First slide"
                  />

                  <div className={classes['slider__item-imgWallBox']}>
                    <img className={classes['slider__item-imgWall']}
                      src={card.image}
                      alt={card.title}
                    />
                  </div>
                </div>

              </div>

            </a>
          </Carousel.Item>
        }
      })}

    </Carousel>
  );
}

export default Slider;