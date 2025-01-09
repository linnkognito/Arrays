import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from './Button';
import { useQuiz } from '../../contexts/QuizContext';

const navLinks = [
  { id: 1, path: '/', title: 'Home' },
  { id: 2, path: '/about', title: 'About' },
  { id: 3, path: '/methods', title: 'Methods' },
  { id: 4, path: '/quiz', title: 'Quiz' },
];

function PageNav() {
  const quizContext = useQuiz();
  const dispatch = quizContext?.dispatch;
  const status = quizContext?.status;
  const location = useLocation();

  function handleQuizLink(path) {
    if (
      location.pathname === '/quiz' &&
      path === '/quiz' &&
      status !== 'ready'
    ) {
      const confirmReset = window.confirm(
        'Are you sure you want to reset the quiz? Your current progress will be lost.'
      );

      if (!confirmReset) return;

      dispatch({ type: 'reset' });
    }
  }

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
          <NavLink
            key={link.id}
            to={link.path}
            onClick={() => handleQuizLink(link.path)}
          >
            <Button className='button-nav'>{link.title}</Button>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default PageNav;
