///////____________I M P O R T S____________///////
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { parseCodeTags, parseText } from './utils/helpers';

//___L I B R A R I E S__________________________//
// import { v4 as uuidv4 } from 'uuid';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

//___F I L E S__________________________________//
import './index.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import MethodList from './pages/MethodList';
import Quiz from './pages/Quiz';
import TipsAndTricks from './pages/TipsAndTricks';
import PageNotFound from './pages/PageNotFound';

///////________________A P P________________///////
export default function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='methods' element={<MethodList />} />
          <Route path='quiz' element={<Quiz />} />
          <Route path='tips' element={<TipsAndTricks />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
