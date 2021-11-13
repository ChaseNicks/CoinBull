import React from "react";

const NewsItem = (props) => {
  return (
    <div className="news-item mx-5 my-4">
      <div className="image-container">
        <img src={props.image} alt={props.title} className="news-image" />
      </div>
      <div className="item-content">
        <h5 className="title is-5 news-title">{props.title}</h5>
        <p>{props.description}</p>
        <a
          href={props.url}
          rel="noreferrer"
          target="_blank"
          style={{ color: "black" }}
        >
          Go to Article
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
