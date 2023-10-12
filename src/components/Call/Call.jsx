import classes from './call.module.scss';
import resume from '../../assets/resume.pdf';

const Call = () => {
  return (
    <div className={classes['call']} id='call'>
      <div className={classes['call__content']}>
        <a
          href={resume}
          className={classes['call__content-resume']}
          target='_blank'
        >
          RESUME
        </a>

        <a
          className={classes['call__content-phone']}
          href="tel: +998903928068"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Call;