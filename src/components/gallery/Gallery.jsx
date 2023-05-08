import { Fragment, useState } from 'react';
import classes from './Gallery.module.css';
import Modal from './modal/Modal';
import Picture from './Picture';

const imgNames = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];
const images = imgNames.map((image) => `assets/gallery/${image}.webp`);

function Gallery() {
  const [openedImage, setOpenedImage] = useState(null);

  const openImageHandler = (image) => {
    setOpenedImage(image);
  };

  const closeImageHandler = () => {
    setOpenedImage(null);
  };

  return (
    <Fragment>
      <h1 className={classes.h1}>Gallery</h1>
      <div className={classes.grid}>
        {images.map((image, index) => (
          <Picture
            img={image}
            key={index}
            onClick={openImageHandler.bind(this, image)}
          />
        ))}
      </div>
      {openedImage && (
        <Modal img={openedImage} imgs={images} onClose={closeImageHandler} />
      )}
    </Fragment>
  );
}

export default Gallery;
