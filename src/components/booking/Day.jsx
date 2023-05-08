import classes from './Day.module.css';

function Day(props) {
  const styleClasses = `${classes.day} ${props.active && classes.active}`;

  return (
    <li className={styleClasses} onClick={props.onClick.bind(null, props.date)}>
      <span>{props.date}</span>
      <span>({props.weekday})</span>
    </li>
  );
}

export default Day;
