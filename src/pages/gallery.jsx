import Gallery from '../components/gallery/Gallery';
import Container from '../components/ui/Container';
import { Fragment } from 'react';

function GalleryPage() {
  return (
    <Fragment>
      {/* <Head>
        <title>Gallery</title>
        <meta name='description' content='Gallery of bowling alley' />
      </Head> */}
      <Container>
        <Gallery />
      </Container>
    </Fragment>
  );
}

export default GalleryPage;
