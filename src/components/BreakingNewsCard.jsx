// BreakingNewsCard.jsx
import React from "react";


import './BreakingNewsCard.css';  // CSS file to style this
import { ClockCounterClockwise} from 'phosphor-react';
import { FileText } from 'phosphor-react';
import news from '../assets/news.jpg';
import { useEffect, useState } from 'react'; // make sure it's imported at the top

// Inside BreakingNewsCard component, before `return`

const BreakingNewsCard = ({ title, link, published, source, description, thumbnail }) => {
  // Format time into "Just now"
  const current = "few minutes ago"
  const img=thumbnail;
 const [imgSrc, setImgSrc] = useState(thumbnail);

useEffect(() => {
  if (!thumbnail) return;
  
  const img = new Image();
  let didTimeout = false;

  const timeout = setTimeout(() => {
    didTimeout = true;
    setImgSrc(news); // fallback after 3 sec
  }, 2000);

  img.onload = () => {
    if (!didTimeout) {
      clearTimeout(timeout);
      setImgSrc(thumbnail); // success
    }
  };

  img.onerror = () => {
    if (!didTimeout) {
      clearTimeout(timeout);
      setImgSrc(news); // fallback on error
    }
  };

  img.src = thumbnail;

  return () => clearTimeout(timeout);
}, [thumbnail]);

  return (
    <div className="breaking-card">
   
  {img!= undefined ? (
    <img src={imgSrc} alt="thumbnail" className="breaking-image" 
    onError={(e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = news; // Set your fallback image
}}/>                                        
  ) : (
    //<div className="breaking-image" style={{ backgroundColor: "#eee", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}></div>
    <img src={news}className="breaking-image"></img>
  
  )}

  <div className="breaking-content">
    <h2 className="breaking-title">
      <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
    </h2>
    
    <div className="breaking-footer">
      <span className="breaking-time"style={{ display: 'flex', alignItems: 'center' }}>
<ClockCounterClockwise size={24}  color="#457B9D" />
{current}</span>

      {source && <span className="breaking-source"style={{ display: 'flex', alignItems: 'center' }}> <FileText size={20}  color="#000" />{source}</span>}
    </div>
  </div>
</div>

  );
};

export default BreakingNewsCard;
