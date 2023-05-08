import Banner from '../components/ui/Banner';
import { Fragment } from 'react';

function BarPage() {
  return (
    <Fragment>
      {/* <Head>
        <title>Bar</title>
        <meta name='description' content='See what we have to eat and drink' />
      </Head> */}
      <Banner text='Bar' img='assets/bar.webp' />
    </Fragment>
  );
}

export default BarPage;
