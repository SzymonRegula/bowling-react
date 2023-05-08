import classes from './Container.module.css';

function Container({ children }) {
  return <div className={classes.container}>{children}</div>;
}

Container.prop;

export default Container;
