import classes from './Map.module.css';

function Map() {
  return (
    <iframe
      className={classes.map}
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24017.887369090084!2d18.57127095242753!3d54.39455967446489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd749d1235c843%3A0xfcd84ec3fd42db78!2sAleja%20Grunwaldzka%2C%20Gda%C5%84sk!5e1!3m2!1spl!2spl!4v1678744758641!5m2!1spl!2spl'
      allowFullScreen=''
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  );
}

export default Map;
