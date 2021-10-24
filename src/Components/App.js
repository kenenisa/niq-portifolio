import React, { useEffect, useState } from 'react';
// import logo from './../logo.svg';
import './App.css';
import Body from './Body/Body';
import Header from './Header/Header';
// import { Button, Icon, Table } from '@material-ui/core';
// import { AccessAlarm } from '@material-ui/icons';

function App() {
  const [page, setPage] = useState('home');
  useEffect(() => {
    const dir = window.location;
    if (dir.search.includes("page")) {
      const page = dir.search.split('page=')[1].split('&')[0]
      setPage(page);
    }
  });
  useEffect(() => {
    console.log(page);
  }, [page]);
  return (
    // <Icon>add_circle</Icon>
    <div className="app">
      <span className="above">
        <Header />
      </span>
      <span className="under">
        <Body page={page} />
      </span>
    </div>
  );
}

export default App;
