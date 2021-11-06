import React from "react";
import { Link } from "react-router-dom";


const NewsItem = (props) => {

    return (
        <>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <Link to={`${props.url}`}>Go to Article</Link>
        </>
    );
};

export default NewsItem;