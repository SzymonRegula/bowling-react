import { Fragment, useCallback, useEffect, useState } from 'react';
import Backdrop from './Backdrop';
import ModalPicture from './ModalPicture';

function Modal({ onClose, imgs, img }) {
  console.log('refresh');
  const [currentImage, setCurrentImage] = useState(img);

  const nextImage = useCallback(() => {
    const imgId = imgs.indexOf(currentImage);
    if (imgId === imgs.length - 1) {
      setCurrentImage(imgs[0]);
    } else {
      setCurrentImage(imgs[imgId + 1]);
    }
  }, [currentImage, imgs]);

  const previousImage = useCallback(() => {
    const imgId = imgs.indexOf(currentImage);
    if (imgId === 0) {
      setCurrentImage(imgs[imgs.length - 1]);
    } else {
      setCurrentImage(imgs[imgId - 1]);
    }
  }, [currentImage, imgs]);

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
