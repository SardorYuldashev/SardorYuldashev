import classes from './frontend.module.scss';
import Slider from '../Slider/';
import frontend from '../../assets/lists/frontend';

const Frontend = () => {
  return (
    <div className={classes['frontend']} id='frontend'>
      <h2 className={classes['frontend-title']}>
        Frontend jobs
      </h2>

      <div className={classes['frontend-slider']}>
        <Slider list={frontend} delay={2000} />
      </div>
    </div>
  );
};

export default Frontend;