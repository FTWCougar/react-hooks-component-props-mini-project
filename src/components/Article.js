import React from "react";

const Article = ({title, date="January 1, 1970", text}) => {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{text}</p>
        </article>
    )
}

export default Article;