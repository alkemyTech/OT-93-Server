import React from 'react';
import '../css/App.css';
import { HashRouter } from 'react-router-dom';
import Router from './router';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <>
      <div className="App">
        <HashRouter>
          <Header />
          <Router />
          <Footer />
        </HashRouter>
      </div>
    </>
  );
}

export default App;
