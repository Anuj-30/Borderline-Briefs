import React from 'react';
import './Header.css';


const Header = ({ onCountryChange }) => {
  return (
    <header className="main-header">
      <div className="site-title">Borderline Briefs</div>
      <nav className="nav-tabs">
        <button onClick={() => onCountryChange('india')}>India</button>
        <button onClick={() => onCountryChange('pakistan')}>Pakistan</button>
        <button onClick={() => onCountryChange('international')}>International</button>
        <button onClick={() => onCountryChange('all')}>All</button>
      </nav>
    </header>
  );
};

export default Header;
