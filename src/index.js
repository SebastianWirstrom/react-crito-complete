import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import NotFound from './Views/NotFound';
import News from './Views/News';
import Contacts from './Views/Contacts';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/News' element={<News />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

