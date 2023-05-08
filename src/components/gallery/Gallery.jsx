import { Fragment, useState } from 'react';
import classes from './Gallery.module.css';
import Modal from './modal/Modal';
import Picture from './Picture';

const imgNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

function Gallery() {
  const [openedImage, setOpenedImage] = useState(null);

  const openImageHandler = (imgName) => {
    setOpenedImage(imgName);
    console.log(imgName);
  };

  const closeImageHandler = () => {
    setOpenedImage(null);
  };

  return (
    <Fragment>
      <h1 className={classes.h1}>Gallery</h1>
      <div className={classes.grid}>
        {imgNames.map((name) => (
          <Picture
            img={`/src/assets/gallery/${name}.jpg`}
            key={name}
            onClick={openImageHandler.bind(this, name)}
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
