import { useEffect, useState } from 'react';
import classes from './Calendar.module.css';
import Day from './Day';
import Lanes from './Lanes';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDay } from '../../../redux/booking';
import Legend from './Legend';

function Calendar() {
  const [dates, setDates] = useState([]);
  const selectedDay = useSelector((state) => state.booking.selectedDay);
  const dispatch = useDispatch();

  useEffect(() => {
    const datesArr = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
      const weekday = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
      }).format(date);
      datesArr.push({ date: date.toLocaleDateString('pl-PL'), weekday });
    }
    setDates(datesArr);
  }, []);

  const pickDayHandler = (date) => {
    dispatch(setSelectedDay(date));
  };

  return (
    <>
      <h1 className={classes.h1}>Choose the day</h1>
      <ul className={classes.calendar}>
        {dates.map((date) => (
          <Day
            date={date.date}
            weekday={date.weekday}
            key={date.date}
            onClick={pickDayHandler}
            active={date.date === selectedDay}
          />
        ))}
      </ul>
      <div className={classes.box}>
        <div>
          <h2 className={classes.h2}>Choose the time and lane</h2>
          <Lanes />
        </div>
        <Legend />
      </div>
    </>
  );
}

export default Calendar;
