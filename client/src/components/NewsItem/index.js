import React from "react";


const NewsItem = (props) => {

    return (
        <>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <a href={props.url} rel="noreferrer" target="_blank">Go to Article</a>
        </>
    );
};

export default NewsItem;