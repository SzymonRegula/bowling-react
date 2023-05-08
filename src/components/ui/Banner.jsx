import classes from './Banner.module.css';

function Banner(props) {
  return (
    <div className={classes.banner}>
      <img className={classes.img} src={props.img} alt='' />
      <h1 className={classes.h1}>{props.text}</h1>
    </div>
  );
}

export default Banner;
