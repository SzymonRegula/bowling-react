import classes from './ContactDetails.module.css';

function ContactDetails() {
  return (
    <div className={classes.details}>
      <span className={classes.place}>Bowling Alley</span>
      <ul className={classes.contact}>
        <li>
          <span>Aleja Grunwaldzka</span>
        </li>
        <li>
          <span>80-000 Gdańsk</span>
        </li>
        <li>
          <span>tel.: 012 345 678</span>
        </li>
        <li>
          <span>e-mail: bowling@gmail.com</span>
        </li>
      </ul>
      <span className={classes.opening}>Opening hours</span>
      <ul className={classes.hours}>
        <li>
          <span>Sunday-Thursday: 10:00 - 0:00</span>
        </li>
        <li>
          <span>Friday-Saturday: 10:00 - 1:00</span>
        </li>
      </ul>
    </div>
  );
}

export default ContactDetails;
