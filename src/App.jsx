import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';

import './index.css';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import MethodList from './pages/MethodList';
import QuizPage from './pages/QuizPage';
import PageNotFound from './pages/PageNotFound';
import { QuizProvider } from './contexts/QuizContext';
import Main from './components/Main';

export default function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='methods' element={<MethodList />} />
          <Route
            path='quiz'
            element={
              <QuizProvider>
                <QuizPage />
              </QuizProvider>
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Main>
  );
}
