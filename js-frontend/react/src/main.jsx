import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)



// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { DarkModeProvider } from './DarkModeContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <DarkModeProvider>
//         <App />
//     </DarkModeProvider>
// );