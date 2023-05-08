import Container from '../components/ui/Container';
import Contact from '../components/contact/Contact';
import { Fragment } from 'react';

function ContactPage() {
  return (
    <Fragment>
      {/* <Head>
        <title>Contact</title>
        <meta name='description' content='Contact details and map' />
      </Head> */}
      <Container>
        <Contact />
      </Container>
    </Fragment>
  );
}

export default ContactPage;
