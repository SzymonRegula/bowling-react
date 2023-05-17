import classes from './Legend.module.css';

function Legend() {
  return (
    <div className={classes.box}>
      <h3>What the colors mean?</h3>
      <div className={classes.row}>
        <div className={`${classes.square} ${classes.unavailable}`} />
        <span>Unavailable</span>
      </div>
      <div className={classes.row}>
        <div className={`${classes.square} ${classes.available}`} />
        <span>Available</span>
      </div>
      <div className={classes.row}>
        <div className={`${classes.square} ${classes.selected}`} />
        <span>Selected</span>
      </div>
    </div>
  );
}

export default Legend;
