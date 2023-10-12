import Carousel from 'react-bootstrap/Carousel';
import classes from './slider.module.scss';
import mac from '../../assets/macfront.webp';

function Slider({ list, delay }) {
  return (
    <Carousel className={classes['slider']}>

      {list.map(card => {
        if (card.id % 2 === 1) {
          return <Carousel.Item key={card.id} interval={delay} className={classes['slider__content']}>
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
                    {typeof card.technologies === "string"
                      ? <p className={classes['slider__item-text']}>{card.technologies}</p>
                      : card.technologies.map(item => {
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
          return <Carousel.Item key={card.id} interval={delay} className={classes['slider__content']}>
            <a href={card.url} target='_blank' className={classes['slider__item']}>
              <div className={classes['slider__item-card']}>

                <div className={classes['slider__item-info']}>
                  <ul>
                    <h2 className={classes['slider__item-title']}>
                      {card.title}
                    </h2>
                    {typeof card.technologies === "string"
                      ? <p className={classes['slider__item-text']}>{card.technologies}</p>
                      : card.technologies.map(item => {
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