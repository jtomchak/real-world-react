import React from "react";

const ArticlePreview = ({ article }) => {
  // const article = props.article;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a>
          <img src={article.author.image} />
        </a>

        <div className="info">
          <a className="author">{article.author.username}</a>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart" />
            {article.favoritesCount}
          </button>
        </div>
      </div>

      <a to={`articles/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-last">
          {article.tagList.map(tag => (
            <li className="tag-default tag-pill tag-outline" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </a>
    </div>
  );
};

export default ArticlePreview;
