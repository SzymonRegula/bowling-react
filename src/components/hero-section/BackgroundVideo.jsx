import classes from './BackgroundVideo.module.css';

function BackgroundVideo() {
  return (
    <video className={classes.video} autoPlay loop muted playsInline>
      <source src='/src/assets/homepage_video.mp4' type='video/mp4'></source>
    </video>
  );
}

export default BackgroundVideo;
