import React from 'react';
import '../css/App.css';
import { HashRouter } from 'react-router-dom';
import Router from './router';
import Footer from './Footer';
import Header from './Header';
import mainRoutes from '../utils/navigation';
import News from '../pages/News/Index';

function App() {
  return (
    <>
      <div className="App">
        <HashRouter>
          <Header />
          <Router />
          <Router path={mainRoutes.PublicRoutes.news}>
            {/* datos recibidos de la API */}
            <News data={data} />
          </Router>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
}

export default App;
