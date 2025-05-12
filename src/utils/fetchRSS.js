const BASE_URL = "https://api.rss2json.com/v1/api.json?rss_url=";

export const fetchRSSFeed = async (rssUrl) => {
  try {
    const res = await fetch(`${BASE_URL}${encodeURIComponent(rssUrl)}`);
    const data = await res.json();

    if (data.status !== "ok") return [];

    return data.items.map(item => {

      console.log('title', item.title);
      console.log("Raw pubDate:", item.pubDate);  // Log raw pubDate to check the RSS format

      // Log UTC and converted times
      const utcDate = new Date(item.pubDate);
      console.log("utc",utcDate.toString())
      console.log("UTC Time:", utcDate.toISOString());  // Log the UTC time

      const localDate = utcDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      console.log("Converted to IST:", localDate);  // Log the converted IST time

      return {
        title: item.title,
        link: item.link,
        source: data.feed.title,
        description: item.contentSnippet || item.content || "",
        published: item.pubDate,  // Converted to IST
        isBreaking: /india|pakistan|border|war|strike|conflict|kashmir/i.test(item.title)
      };
    });
  } catch (err) {
    console.error("Error loading RSS:", err);
    return [];
  }
};

export const fetchAllFeedsByType = async (typeSources) => {
  const results = await Promise.all(typeSources.map(src => fetchRSSFeed(src)));
  return results.flat();
};
