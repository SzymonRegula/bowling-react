import LinkButton from '../ui/LinkButton';
import BackgroundVideo from './BackgroundVideo';
import classes from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={classes.hero}>
      <BackgroundVideo />
      <div className={classes.box}>
        <h1>The best bowling in town!</h1>
        <LinkButton link='/booking'>Book</LinkButton>
      </div>
    </div>
  );
}

export default HeroSection;
