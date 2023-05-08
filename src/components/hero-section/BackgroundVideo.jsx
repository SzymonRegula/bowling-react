import classes from './BackgroundVideo.module.css';
import video from '/src/assets/homepage_video.mp4';

function BackgroundVideo() {
  return (
    <video className={classes.video} autoPlay loop muted playsInline>
      <source src={video} type='video/mp4'></source>
    </video>
  );
}

export default BackgroundVideo;
