import { Fragment } from 'react';
import HeroSection from '../components/hero-section/HeroSection';
// import Head from 'next/head';

function HomePage() {
  return (
    <Fragment>
      {/* <Head>
        <title>Bowling Alley</title>
        <meta name='description' content='Best bowling alley in town' />
      </Head> */}
      <HeroSection />
    </Fragment>
  );
}

export default HomePage;
