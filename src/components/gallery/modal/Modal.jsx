import { Fragment, useCallback, useEffect, useState } from 'react';
import Backdrop from './Backdrop';
import ModalPicture from './ModalPicture';

function Modal({ onClose, imgNames, img }) {
  const [currentImage, setCurrentImage] = useState(img);

  const nextImage = useCallback(() => {
    const imgId = imgNames.indexOf(currentImage);
    if (imgId === imgNames.length - 1) {
      setCurrentImage(imgNames[0]);
    } else {
      setCurrentImage(imgNames[imgId + 1]);
    }
  }, [currentImage, imgNames]);

  const previousImage = useCallback(() => {
    const imgId = imgNames.indexOf(currentImage);
    if (imgId === 0) {
      setCurrentImage(imgNames[imgNames.length - 1]);
    } else {
      setCurrentImage(imgNames[imgId - 1]);
    }
  }, [currentImage, imgNames]);

  const keyFunction = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        previousImage();
      }
    },
    [onClose, nextImage, previousImage]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyFunction);

    return () => {
      document.removeEventListener('keydown', keyFunction);
    };
  }, [keyFunction]);

  return (
    <Fragment>
      <ModalPicture
        img={currentImage}
        onClickPrev={previousImage}
        onClickNext={nextImage}
      />
      <Backdrop onClick={onClose} />
    </Fragment>
  );
}

export default Modal;
