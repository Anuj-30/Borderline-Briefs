import React from "react";
import './NewsCard.css';
import { ClockCounterClockwise } from 'phosphor-react';
import { FileText } from 'phosphor-react';
import fall from '../assets/fall.jpg';
const NewsCard = ({ title, link, description, thumbnail, published, source, breakingTime }) => {
  const current = breakingTime ? new Date(breakingTime) : new Date();
  const publishedTime = new Date(published);
  const diffInMs = current - publishedTime;
  const diffInMin = Math.floor(diffInMs / (1000 * 60));

  const relative =
    diffInMin < 1
      ? "Just now"
      : diffInMin < 60
      ? `${diffInMin} min ago`
      : `${Math.floor(diffInMin / 60)} hr ago`;

  return (
   <div className="news-card">
  <div className="card-content">
   <img src={fall} alt="thumbnail" className="thumbnail-img" />

    <div className="card-text">
      <h2 className="card-title">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <div className="card-meta">
        <span><ClockCounterClockwise size={18} color="#457B9D" /> {relative}</span>
        {source && (
          <span><FileText size={16} /> {source}</span>
        )}
      </div>
    </div>
  </div>
</div>

  );
};

export default NewsCard;
