import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import NotFound from './Views/NotFound';
import News from './Views/News';
import NewsDetails from './Views/NewsDetails'
import Contacts from './Views/Contacts';
import './index.css';
import { ArticleProvider } from './Contexts/ArticleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ArticleProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/News' element={<News />} />
        <Route path='/News/:id' element={<NewsDetails />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ArticleProvider>
    </BrowserRouter>
  </React.StrictMode>
);

