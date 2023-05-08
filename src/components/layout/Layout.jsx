import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className={classes.page}>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
