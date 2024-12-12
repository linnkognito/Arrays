import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { id: uuidv4(), path: '/', title: 'Home' },
  { id: uuidv4(), path: '/about', title: 'About' },
  { id: uuidv4(), path: '/methods', title: 'Methods' },
  { id: uuidv4(), path: '/quiz', title: 'Quiz' },
  { id: uuidv4(), path: '/tips', title: 'Tips & Tricks' },
];

function PageNav() {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    if (activeLink) document.title = `[ Arrays ] - ${activeLink.title}`;

    return () => (document.title = '[ Arrays ]');
  }, [activeLink]);

  return (
    <header>
      <NavLink style={{ textDecoration: 'none' }} to='/'>
        <h1>[ Arrays ]</h1>
      </NavLink>

      <nav>
        {navLinks.map((link) => (
          <NavLink to={link.path} key={link.id}>
            <Button
              className='button-nav'
              key={link.id}
              onClick={() => setActiveLink(link)}
            >
              {link.title}
            </Button>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default PageNav;
