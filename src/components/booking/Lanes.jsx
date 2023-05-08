import { Fragment } from 'react';
import classes from './Lanes.module.css';
import Square from './Square';

function Lanes({ onSquareClick, bookings }) {
  const lanes = [1, 2, 3, 4, 5, 6, 7, 8];
  const hours = [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ];

  return (
    <div className={classes.grid}>
      <span>Lane</span>
      {lanes.map((lane) => (
        <span key={lane}>{lane}</span>
      ))}

      {hours.map((hour) => {
        return (
          <Fragment key={hour}>
            <span>{hour}</span>
            {lanes.map((lane) => {
              return (
                <Square
                  key={lane}
                  onClick={onSquareClick.bind(null, hour, lane)}
                  bookings={bookings}
                ></Square>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Lanes;
