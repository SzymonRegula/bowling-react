import classes from './Picture.module.css';

function Picture(props) {
  return (
    <div className={classes.box} onClick={props.onClick}>
      <img className={classes.img} src={props.img} alt='' />
    </div>
  );
}

export default Picture;
