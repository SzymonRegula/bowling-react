import { Fragment, useState } from 'react';
import classes from './Gallery.module.css';
import Modal from './modal/Modal';
import Picture from './Picture';

const images = import.meta.glob('/src/assets/gallery/*.jpg');
Object.keys(images).map((image, index) => console.log(images[image].default));

function Gallery() {
  const [openedImage, setOpenedImage] = useState(null);

  const openImageHandler = (imgIndex) => {
    setOpenedImage(imgIndex);
  };

  const closeImageHandler = () => {
    setOpenedImage(null);
  };

  return (
    <Fragment>
      <h1 className={classes.h1}>Gallery</h1>
      <div className={classes.grid}>
        {Object.keys(images).map((image, index) => (
          <Picture
            img={images[image].default}
            key={index}
            onClick={openImageHandler.bind(this, index)}
          />
        ))}
      </div>
      {openedImage && (
        <Modal
          img={openedImage}
          imgNames={imgNames}
          onClose={closeImageHandler}
        />
      )}
    </Fragment>
  );
}

export default Gallery;
