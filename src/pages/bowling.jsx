import Banner from '../components/ui/Banner';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import { Fragment } from 'react';
import Pricing from '../components/pricing/Pricing';

function BowlingPage() {
  return (
    <Fragment>
      {/* <Head>
        <title>Bowling</title>
        <meta name='description' content='Bowling prices' />
      </Head> */}
      <Banner text='Bowling' img='assets/bowling.webp' />
      <Container>
        <Card>
          <Pricing />
        </Card>
      </Container>
    </Fragment>
  );
}

export default BowlingPage;
