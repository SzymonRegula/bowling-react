import ContactForm from '../components/booking/ContactForm';
import Calendar from '../components/booking/calendar/Calendar';
import Container from '../components/ui/Container';
import { Fragment } from 'react';

function BookingPage() {
  return (
    <Fragment>
      {/* <Head>
        <title>Book now</title>
        <meta name='description' content='Book your bowling lane' />
      </Head> */}
      <Container>
        <Calendar />
        <ContactForm />
      </Container>
    </Fragment>
  );
}

export default BookingPage;
