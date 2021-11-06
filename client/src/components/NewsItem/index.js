import React from "react";

const NewsItem = (props) => {
  return (
    <div className="news-item">
      <img src={props.image} alt={props.title} className="news-image" />
      <h5 className="title is-5">{props.title}</h5>
      <p>{props.description}</p>
      <a href={props.url} rel="noreferrer" target="_blank">
        Go to Article
      </a>
    </div>
  );
};

export default NewsItem;
