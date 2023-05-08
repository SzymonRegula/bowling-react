import classes from './Error.module.css';

function Error({ message }) {
  return (
    <div className={classes.error}>
      <h1>An error occured!</h1>
      <p>{message}</p>
    </div>
  );
}

export default Error;
