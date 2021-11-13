import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem";

import { getNews } from "../../utils/API";
import "./styles/newsCard.css";

const NewsCard = (props) => {
  const [newsState, setNewsState] = useState([]);
  const symbol = props.symbol;

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
  }, [symbol]);

  const currentNews = newsState;

  return (
    <div className="container news-container">
      <div className="is-capitalized is-size-2 has-text-centered my-5">
        Trending Stories
      </div>

      {currentNews.map((newsItem, i) => (
        <div className="columns is-centered" key={i}>
          <article className="card news-card column is-three-quarters">
            <NewsItem
              key={newsItem.id}
              name={newsItem.name}
              title={newsItem.title}
              description={newsItem.description}
              url={newsItem.url}
              image={newsItem.image}
            />
          </article>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
