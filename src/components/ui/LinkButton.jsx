import { Link } from 'react-router-dom';
import classes from './LinkButton.module.css';

function LinkButton(props) {
  return (
    <Link to={props.link} className={classes.button}>
      {props.children}
    </Link>
  );
}

export default LinkButton;
