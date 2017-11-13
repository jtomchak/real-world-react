import React from "react";

const ArticleList = props => {
  //fetching articles
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
      {props.articles.map(article => {
        return <h2>{article.title}</h2>;
      })}
    </div>
  );
};

export default ArticleList;
