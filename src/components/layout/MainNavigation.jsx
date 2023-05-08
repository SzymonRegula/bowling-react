import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to='/' className={classes.logo}>
        Bowling Alley
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink className={classes.link} to='/bowling'>
              BOWLING
            </NavLink>
          </li>
          <li>
            <Link className={classes.link} to='/bar'>
              BAR
            </Link>
          </li>
          <li>
            <Link className={classes.link} to='/gallery'>
              GALLERY
            </Link>
          </li>
          <li>
            <Link className={classes.link} to='/contact'>
              CONTACT
            </Link>
          </li>
          <li>
            <Link className={classes['book-link']} to='/booking'>
              BOOK NOW
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
