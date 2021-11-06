import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem";
import { getNews } from "../../utils/API";
import "./styles/newsCard.css";

const NewsCard = () => {
  const [newsState, setNewsState] = useState([]);
  const symbol = "BTC";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews(symbol);
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
      <article className="card">
        {currentNews.map((newsItem) => (
          <NewsItem
            key={newsItem.id}
            name={newsItem.name}
            title={newsItem.title}
            description={newsItem.description}
            url={newsItem.url}
          />
        ))}
      </article>
    </>
  );
};

export default NewsCard;
