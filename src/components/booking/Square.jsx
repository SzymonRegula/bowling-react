import classes from './Square.module.css';

function Square({ onClick, booked }) {
  const styleClasses = `${classes.square} ${booked && classes.booked}`;

  return <div className={styleClasses} onClick={onClick}></div>;
}
export default Square;
