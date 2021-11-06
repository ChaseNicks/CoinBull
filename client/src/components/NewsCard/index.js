import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem";
import { getNews } from "../../utils/API";

const NewsCard = () => {
  const [newsState, setNewsState] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews();
        setNewsState(news.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, []);

  const currentNews = newsState;

  return (
    <>
      <article>
        {currentNews.map((newsItem) => (
          <NewsItem
            key={newsItem.id}
            name={newsItem.name}
            title={newsItem.title}
            description={newsItem.description}
            newsItem_url={newsItem.url}
          />
        ))}
      </article>
    </>
  );
};

export default NewsCard;
