import { useEffect, useState } from 'react';
import classes from './Calendar.module.css';
import Day from './Day';
import Lanes from './Lanes';

function Calendar() {
  const [today, setToday] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [selectedDay, setSelectedDay] = useState(today.toLocaleDateString());
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const datesArr = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const weekday = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
      }).format(date);
      datesArr.push({ date: date.toLocaleDateString(), weekday });
    }

    setDates(datesArr);
  }, [today]);

  const pickDayHandler = (date) => {
    setSelectedDay(date);
  };

  const squareClickHandler = (hour, lane) => {
    const booking = { date: selectedDay, hour, lane };
    if (!bookings.includes(booking)) {
      setBookings((currentBookings) => [booking, ...currentBookings]);
    }
  };

  console.log(bookings);

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
      <h2 className={classes.h2}>Choose the time and lane</h2>
      <Lanes
        onSquareClick={squareClickHandler}
        dayBookings={bookings.filter((booking) => booking.date === selectedDay)}
      ></Lanes>
    </>
  );
}

export default Calendar;
