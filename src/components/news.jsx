import React, { useEffect, useState } from "react";
import { RSS_SOURCES } from "../utils/sources";
import { fetchAllFeedsByType } from "../utils/fetchRSS";
import NewsCard from "../components/NewsCard";
import BreakingNewsCard from "./BreakingNewsCard";

const Home = ({ country }) => {
  const [news, setNews] = useState([]);
const [breakingNews, setBreakingNews] = useState(null);

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
     const latest = allNews[0]; // ← This is the breaking news
setNews(allNews);
setBreakingNews(latest);  // 👈 Save it in state
    };

    loadFeeds();
  }, [country]);


  return (
    <div className="news-list">
      {breakingNews && (
   <BreakingNewsCard
          title={breakingNews.title}
          link={breakingNews.link}
          published={breakingNews.published}
          description={breakingNews.contentSnippet}
          thumbnail={breakingNews.thumbnail}
          source={breakingNews.source}
        />
)}
<>
  <hr style={{
    border: "none",
    height: "1px",
    backgroundColor: "#ddd",
    margin: "30px 0 10px",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto"
  }} />
  <div style={{
    fontWeight: "1000",
    fontSize: "17px",
    fontStyle:'italic',
    marginLeft: "3%",
    marginTop: "0px",
    color: "#333",
    
  }}>
    More to explore
  </div>
</>
<br></br>

{news.slice(1).map((item, idx) => (
  <NewsCard key={idx} {...item} breakingTime={breakingNews?.published} />
))}


    </div>
  );
};

export default Home;
