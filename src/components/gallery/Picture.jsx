import classes from './Picture.module.css';

function Picture({ onClick, img }) {
  return (
    <div className={classes.box} onClick={onClick}>
      <img className={classes.img} src={img} alt='' />
    </div>
  );
}

export default Picture;
