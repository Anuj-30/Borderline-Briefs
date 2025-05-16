
const BASE_URL = "https://api.rss2json.com/v1/api.json?rss_url=";

export const fetchRSSFeed = async (rssUrl) => {
  try {
    const res = await fetch(`${BASE_URL}${encodeURIComponent(rssUrl)}`);
    const data = await res.json();

    if (data.status !== "ok") return [];

    return data.items.map(item => {

      
      // Log UTC and converted times
      const utcDate = new Date(item.pubDate);
     
      const localDate = utcDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
       const image = item.enclosure?.url || item["media:content"]?.url || item.thumbnail || item["media:thumbnail"];
      //console.log(item)
      function cleanTitle(title) {
  // This regex matches everything from the start until the last "|" + optional space
  return title.replace(/^.*\|\s*/, '').trim();
}
console.log(cleanTitle(data.feed.title))
      return {
        title: item.title,
        link: item.link,

        source: cleanTitle(data.feed.title),
        description: item.contentSnippet || item.content || "",
        published: item.pubDate,  // Converted to IST
        thumbnail: image,
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
