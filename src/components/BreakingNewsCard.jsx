// BreakingNewsCard.jsx
import React from "react";
import './BreakingNewsCard.css';  // CSS file to style this
import { ClockCounterClockwise} from 'phosphor-react';
import { FileText } from 'phosphor-react';

const BreakingNewsCard = ({ title, link, published, source, description, thumbnail }) => {
  // Format time into "Just now"
  const current = "few minutes ago"
  
  return (
    <div className="breaking-card">
  {thumbnail ? (
    <img src={thumbnail} alt="thumbnail" className="breaking-image" loading="lazy"
    onError={(e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = "/news.jpg"; // Set your fallback image
  }}/>
  ) : (
    //<div className="breaking-image" style={{ backgroundColor: "#eee", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}></div>
    <img src="/news.jpg"className="breaking-image"></img>
  )}

  <div className="breaking-content">
    <h2 className="breaking-title">
      <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
    </h2>
    <p className="breaking-description">{description || "No description available."}</p>
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
