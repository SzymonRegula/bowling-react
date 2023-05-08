import classes from './ModalPicture.module.css';

function ModalPicture(props) {
  return (
    <div className={classes.figure}>
      <button className={classes.left} onClick={props.onClickPrev}>
        <svg
          className={classes.icon}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
        </svg>
      </button>

      <img
        className={classes.img}
        src={`/src/assets/gallery/${props.img}.jpg`}
        alt=''
      />

      <button className={classes.right} onClick={props.onClickNext}>
        <svg
          className={classes.icon}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
        </svg>
      </button>
    </div>
  );
}

export default ModalPicture;
