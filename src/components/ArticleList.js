import React from "react";
import Article from "./Article"

const ArticleList = ({posts}) => {
    console.log(posts)
    const articles = posts.map(article =>{
        return(
            <Article title={article.title} date={article.date} text={article.preview} key={article.id}/>
        )
    })
    return (
        <main>
            {articles}
        </main>
    );
}

export default ArticleList;