import React from 'react';
import ReactDOM from 'react-dom/client';
import './Book.css';

import Booklists from './Booklists';
import BookClass from './BookClass';
import "./bookGrid.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><Booklists /><BookClass /></>
);



