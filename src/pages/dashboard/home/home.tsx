import React from 'react';
import './home.css';
import header_logo from '../../../assets/header-logo.jpg';
import sl_navbar_logo from '../../../assets/logo-navbar-sl.png';

const Home: React.FC = () => {

  return (
    <div className="home">
      <header className="header">
        <div className="header-image">
          {/* Photo by Life Of Pix: https://www.pexels.com/photo/clear-wine-glass-on-table-67468/ */}
          <img id="header-logo" src={header_logo} alt="header logo of Pibo restaurant" />
          <div className="overlay">
            <h1>Gostilna PIBO</h1>
          </div>
        </div>
      </header>

      <main className="main">
        <h1>Naslov</h1>
        <p>Neko besedilo</p>
        <p>Neko besedilo</p>
        <p>Neko besedilo</p>
        <p>Neko besedilo</p>
        <p>Neko besedilo</p>
        <p>Neko besedilo</p>
        <p>Neko besedilo</p>
        <p>Neko besedilo</p>
        <p>Neko besedilo</p>
        <p>Neko besedilo</p>

      </main>

      <footer className="footer">
        {/* Content */}
      </footer>
    </div>
  );
};

export default Home;