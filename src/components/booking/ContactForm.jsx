import classes from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBooked, setContactData } from '../../redux/booking';

const ContactForm = () => {
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => state.booking);

  const firstName = useSelector((state) => state.booking.contactData.firstName);
  const lastName = useSelector((state) => state.booking.contactData.lastName);
  const email = useSelector((state) => state.booking.contactData.email);

  const changeFirstNameHandler = (event) => {
    const firstName = event.target.value;
    dispatch(setContactData({ firstName }));
  };
  const changeLastNameHandler = (event) => {
    const lastName = event.target.value;
    dispatch(setContactData({ lastName }));
  };
  const changeEmailHandler = (event) => {
    const email = event.target.value;
    dispatch(setContactData({ email }));
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    const newBooking = {
      bookings: [...bookingState.chosen],
      contactDetails: bookingState.contactData,
    };

    try {
      const response = await fetch(
        `https://bowling-booking-4dff2-default-rtdb.europe-west1.firebasedatabase.app/.json`,
        {
          method: 'POST',
          body: JSON.stringify(newBooking),
        }
      );

      if (!response.ok) {
        throw new Error('Booking failed!');
      }

      dispatch(addBooked(newBooking.bookings));
      dispatch(setContactData({ firstName: '', lastName: '', email: '' }));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className={classes.form} onSubmit={formSubmissionHandler}>
      <div className={classes['form-control']}>
        <label htmlFor='first-name'>First Name</label>
        <input
          value={firstName}
          type='text'
          id='first-name'
          onChange={changeFirstNameHandler}
          required
        />
      </div>
      <div className={classes['form-control']}>
        <label htmlFor='last-name'>Last Name</label>
        <input
          value={lastName}
          type='text'
          id='last-name'
          onChange={changeLastNameHandler}
          required
        />
      </div>
      <div className={classes['form-control']}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          value={email}
          type='email'
          id='email'
          onChange={changeEmailHandler}
          required
        />
      </div>
      <div className={classes['form-actions']}>
        <button className={classes.button}>Book</button>
      </div>
    </form>
  );
};

export default ContactForm;
