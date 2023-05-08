import { Fragment } from 'react';
import classes from './Contact.module.css';
import ContactDetails from './ContactDetails';
import Map from './Map';

function Contact() {
  return (
    <Fragment>
      <h1 className={classes.h1}>Contact</h1>
      <div className={classes.contact}>
        <ContactDetails />
        <Map />
      </div>
    </Fragment>
  );
}

export default Contact;
