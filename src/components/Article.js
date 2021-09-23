import react from "react";
import ArticleList from "./ArticleList";

function Article({minutes, title, date='January 1, 1970', preview}){



    return (
        <article key={title}>
            <h3>{title}</h3>
            <small>
                {date} | {minutes} min read
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;