import classes from './Pricing.module.css';
import shoesImg from '/src/assets/bowling-shoes.jpg';

function Pricing() {
  return (
    <div className={classes.pricing}>
      <h2 className={classes.h2}>Hourly Rates</h2>
      <div className={classes.table}>
        <span />
        <p>10-16</p>
        <p>16-01</p>
        <div className={classes.shoes}>
          <div className={classes['shoes-desc']}>
            <p>Rental of bowling shoes PLN 5/per.</p>
            <p>Disposable socks for FREE!</p>
          </div>
          <img src={shoesImg} alt='' className={classes['shoes-img']}></img>
        </div>
        <p>Monday-Thursday</p>
        <p className={classes.price}>
          60<span className={classes.currency}> zł</span>
        </p>
        <p className={classes.price}>
          80<span className={classes.currency}> zł</span>
        </p>
        <p>Friday</p>
        <p className={classes.price}>
          60<span className={classes.currency}> zł</span>
        </p>
        <p className={classes.price}>
          120<span className={classes.currency}> zł</span>
        </p>
        <p>Saturday</p>
        <p className={classes.price}>
          90<span className={classes.currency}> zł</span>
        </p>
        <p className={classes.price}>
          120<span className={classes.currency}> zł</span>
        </p>
        <p>Sunday</p>
        <p className={classes.price}>
          90<span className={classes.currency}> zł</span>
        </p>
        <p className={classes.price}>
          90<span className={classes.currency}> zł</span>
        </p>
      </div>
      <p className={classes.attention}>
        ATTENTION: Saturday price list is valid during public holidays.
      </p>
    </div>
  );
}

export default Pricing;
