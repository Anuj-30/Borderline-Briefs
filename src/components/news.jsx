import React, { useEffect, useState } from "react";
import { RSS_SOURCES } from "../utils/sources";
import { fetchAllFeedsByType } from "../utils/fetchRSS";
import NewsCard from "../components/NewsCard";

const Home = ({ country }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadFeeds = async () => {
      let allNews = [];

      if (country === "all") {
        const india = await fetchAllFeedsByType(RSS_SOURCES.india);
        const pak = await fetchAllFeedsByType(RSS_SOURCES.pakistan);
        const intl = await fetchAllFeedsByType(RSS_SOURCES.international);
        allNews = [...india, ...pak, ...intl];
      } else {
        allNews = await fetchAllFeedsByType(RSS_SOURCES[country]);
      }

      // Optional: sort by latest
      allNews.sort((a, b) => new Date(b.published) - new Date(a.published));
      setNews(allNews);
    };

    loadFeeds();
  }, [country]);

  return (
    <div className="news-list">
      {news.map((item, idx) => (
        <NewsCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default Home;
