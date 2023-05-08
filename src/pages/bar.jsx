import Banner from '../components/ui/Banner';
import { Fragment } from 'react';

function BarPage() {
  return (
    <Fragment>
      {/* <Head>
        <title>Bar</title>
        <meta name='description' content='See what we have to eat and drink' />
      </Head> */}
      <Banner text='Bar' img='/src/assets/bar.jpg' />
    </Fragment>
  );
}

export default BarPage;
