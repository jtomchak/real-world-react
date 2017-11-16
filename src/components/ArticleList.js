import React from "react";
import ArticlePreview from "./ArticlePreview";

const ArticleList = props => {
  //fetching articles
  console.log(props.articles);
  if (!props.articles) {
    return <div className="article-preview">Loading...</div>;
  }

  //no articles returned :-)
  if (props.articles.length === 0) {
    return (
      <div className="article-preview">No Articles are here .... meow.</div>
    );
  }

  //3rd, which is sweet, articles list stuff
  return (
    <div>
      {props.articles.map((article, index) => (
        <div key={article.slug}>
          <h2>{article.title}</h2>
          <ArticlePreview article={article} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
