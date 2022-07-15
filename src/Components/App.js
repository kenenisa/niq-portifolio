import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Body from './Body/Body';
import Header from './Header/Header';
import request from './../Util/request';
function App() {
  const [page, setPage] = useState('home');
  useEffect(() => {
    const dir = window.location;
    if (dir.search.includes("page")) {
      const page = dir.search.split('page=')[1].split('&')[0]
      setPage(page);
    }
    if (!localStorage.visit) {
      request('visit').then((e) => {
        localStorage.visit = true
      })
    }
  }, []);
  return (
    // <Icon>add_circle</Icon>
    <BrowserRouter>
      <div className="app">
        <span className="above">
          <Header />
        </span>
        <span className="under">
          <Body page={page} />
        </span>
      </div>
    </BrowserRouter>
  );
}

export default App;
