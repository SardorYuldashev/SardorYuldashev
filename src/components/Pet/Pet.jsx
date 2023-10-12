import classes from './pet.module.scss';
import Slider from '../Slider/';
import pet from '../../assets/lists/pet';

const Pet = () => {
  return (
    <div className={classes['pet']} id='pet'>
      <h2 className={classes['pet-title']}>
        Pet projects
      </h2>

      <div className={classes['pet-slider']}>
        <Slider list={pet} delay={3000} />
      </div>
    </div>
  );
};

export default Pet;