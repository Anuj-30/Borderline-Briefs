import React from "react";
import './NewsCard.css'
// Local utility inside the same file for now
const formatTo12Hour = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-IN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const NewsCard = ({ title, link, description, published, source }) => {
  return (
    <div className="news-card border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-2">
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {title}
        </a>
      </h2>
     
      <div className="text-xs text-gray-500 ">
        {published}
        {source && <span className="ml-2">| {source}</span>}
      </div>
    </div>
  );
};

export default NewsCard;
