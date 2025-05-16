import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onCountryChange,nav }) => {
  

  return (
    <>
    
  <div className="main-header">
    <div className="site-title">Borderline Briefs</div>
  </div>

  <nav className="nav-tabs">
   <button onClick={() => { onCountryChange('india'); nav(true); }}>India</button>
<button onClick={() => { onCountryChange('pakistan'); nav(true); }}>Pakistan</button>
<button onClick={() => { onCountryChange('international'); nav(true); }}>International</button>
<button onClick={() => { onCountryChange('all'); nav(true); }}>All</button>

  </nav>
  
</>

  );
};

export default Header;
