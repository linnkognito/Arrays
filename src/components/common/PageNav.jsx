import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from './Button';
import styles from './PageNav.module.css';

const navLinks = [
  { id: 1, path: '/', title: 'Home' },
  { id: 2, path: '/about', title: 'About' },
  { id: 3, path: '/methods', title: 'Methods' },
  { id: 4, path: '/quiz', title: 'Quiz' },
];

function PageNav() {
  const location = useLocation();

  // Set page title
  useEffect(() => {
    const currentPage = navLinks.find(
      (link) => link.path === location.pathname
    );
    document.title =
      location.pathname === '/'
        ? '[ Arrays ]'
        : `[ Arrays ] - ${currentPage.title}`;
  }, [location.pathname]);

  return (
    <header>
      <NavLink style={{ textDecoration: 'none' }} to='/'>
        <h1>[ Arrays ]</h1>
      </NavLink>

      <nav>
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path}>
            <Button className={styles.buttonNav}>{link.title}</Button>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default PageNav;
