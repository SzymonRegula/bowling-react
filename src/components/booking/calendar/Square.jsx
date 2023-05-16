import { useDispatch, useSelector } from 'react-redux';
import classes from './Square.module.css';
import { toggleChosen } from '../../../redux/booking';

function Square({ id, date, hour, lane }) {
  const dispatch = useDispatch();
  const booked = useSelector((state) => state.booking.booked);
  const chosen = useSelector((state) => state.booking.chosen);
  const newChoice = { id, date, hour, lane };

  const styleClasses = `${classes.square} ${
    chosen.some((choice) => choice.id === newChoice.id) && classes.chosen
  } ${booked.some((booking) => booking.id === id) && classes.booked}`;

  const onClickHandler = () => {
    dispatch(toggleChosen(newChoice));
  };

  return <div className={styleClasses} onClick={onClickHandler}></div>;
}
export default Square;
