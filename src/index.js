import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const arr = [
  'Yelp',
  'Zipp It',
  'Grobo',
  'Aslan The Lion',
  'Flipper',
  'Questions Guy',
  'Besserwisser',
];
console.log(arr.sort((a, b) => b - a));
