import classes from './portfolio.module.scss';
import Info from '../../components/Info';
import Call from '../../components/Call/Call';
import Skills from '../../components/Skills';
import Information from '../../components/Information';
import Frontend from '../../components/Frontend';
import Backend from '../../components/Backend';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Top from '../../components/Top';
import Pet from '../../components/Pet';
import Education from '../../components/Education';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Portfolio = () => {
  return (
    <div className={classes['home']} >
      <Navbar />
      <Info />
      <Call />
      <Skills />
      <Information />
      <Education />
      <Pet />
      <Backend />
      <Frontend />
      <Footer />
      <Top />
    </div>
  );
};

export default Portfolio;