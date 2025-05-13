import React from "react";
import './NewsCard.css'
import { ClockCounterClockwise} from 'phosphor-react';
import { FileText } from 'phosphor-react';




const NewsCard = ({ title, link, description, published, source,breakingTime }) => {
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
    <div className="news-card border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-2">
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {title}
        </a>
      </h2>
     
      <div className="text-xs text-gray-500 " style={{ display: 'flex', justifyContent:'space-between'}}>
       <span style={{ display: 'flex', alignItems: 'center' }}>
       
      <ClockCounterClockwise size={24}  color="#457B9D" /> {relative}</span>
       {source && <span className="breaking-source"style={{ display: 'flex', alignItems: 'center' }}> <FileText size={20}  color="#000" />{source}</span>}
        
      </div>
    </div>
  );
};

export default NewsCard;
