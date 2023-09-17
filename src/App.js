import React from 'react';
import Card from '../src/components/Card/Card.components';
import Header from './components/header/header.component';
import Nav from './components/nav/nav.component';

import requests from './requests';

// import logo from './logo.svg';
import './App.css';

  function App(){
  return (
    <div className="App">
      <Nav />
      <Header title="Trending Movies" fetchUrl={requests.fetchTrending}/>
      <Card title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* <Card title="Featured Movies" fetchUrl={requests.fetchTrending} /> */}
    </div>
  );
  }

export default App;
