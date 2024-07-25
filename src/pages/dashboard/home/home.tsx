import React from 'react';
import './home.css';
import header_logo from '../../../assets/header-logo.jpg';

const Home: React.FC = () => {

  return (
    <div className="Home">
      <header className="Header">
        {/* Photo by Life Of Pix: https://www.pexels.com/photo/clear-wine-glass-on-table-67468/ */}
        <img id="header-logo" src={header_logo} alt="header logo of Pibo restaurant" />
        <div className="overlay">
          <h1>Gostilna PIBO</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">DOMOV</a></li>
            <li><a href="#room">SOBE</a></li>
            <li><a href="#inn">GOSTILNA PIBO</a></li>
            <li><a href="#hall">DVORANE</a></li>
            <li><a href="#business-offer">POSLOVNA PONUDBA</a></li>
            <li><a href="#wellnes">FITNES IN WELLNESS</a></li>
            <li><a href="#special-offer">POSEBNA PONUDBA</a></li>
            <li><a href="#biking">PIBO KOLESARJENJE</a></li>
            <li><a href="#gallery">GALERIJA</a></li>
          </ul>
        </nav>
      </header>

      <main className="Main">
        {/* Content */}
      </main>

      <footer className="Footer">
        {/* Content */}
      </footer>
    </div>
  );
};

export default Home;
