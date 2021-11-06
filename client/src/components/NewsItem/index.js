import React from "react";

const NewsItem = (props) => {
  return (
    <div className="news-item">
      <div className="image-container">
        <img src={props.image} alt={props.title} className="news-image" />
      </div>
      <div className="item-content">
        <h5 className="title is-5 news-title">{props.title}</h5>
        <p>{props.description}</p>
        <a href={props.url} rel="noreferrer" target="_blank">
          Go to Article
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
