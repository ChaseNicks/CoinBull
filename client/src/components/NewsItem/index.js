import React from "react";

const NewsItem = (props) => {
  return (
    <div className="news-item mx-5 my-4">
      <div className="image-container">
        <a href={props.url} rel="noreferrer" target="_blank">
          <img src={props.image} alt={props.title} className="news-image" />
        </a>
      </div>
      <div className="item-content">
        <h5 className="title is-5 news-title">
          <a style={{color: "inherit"}} href={props.url} rel="noreferrer" target="_blank">
            {props.title}
          </a>
        </h5>
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
