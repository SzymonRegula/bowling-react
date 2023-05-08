import classes from './Square.module.css';

function Square({ onClick }) {
  return <div className={classes.square} onClick={onClick}></div>;
}
export default Square;
