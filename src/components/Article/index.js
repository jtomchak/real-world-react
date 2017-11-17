import React, { Component } from "react";
import { connect } from "react-redux";
import marked from "marked";

import agent from "../../agent";
import ArticleMeta from "./ArticleMeta";
import CommentContainer from "./CommentContainer";

const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "ARTICLE_PAGE_LOADED", payload })
});

class Article extends Component {
  componentWillMount() {
    /*
    we'll need to get article by slug from the url
    and the comments for this. 2 promises. ummmmm
    */
    const articleId = this.props.params.id;
    this.props.onLoad(
      Promise.all([
        agent.Articles.get(articleId),
        agent.Comments.forArticle(articleId)
      ])
    );
  }

  /*
marked is a library that compiles markdown into HTML - in order to get react to render raw HTML, we need to use this dangerouslySetInnerHTML property, because React sanitizes HTML by default.
  */
  render() {
    const article = this.props.article;
    if (!article) {
      return null;
    }
    const markup = { __html: marked(article.body) };
    const canModify =
      this.props.currentUser.username === article.author.username;
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>
            <ArticleMeta article={this.props.article} canModify={canModify} />
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <div dangerouslySetInnerHTML={markup} />

              <ul className="tag-list">
                {article.tagList.map(tag => {
                  return (
                    <li className="tag-default tag-pill tag-outline" key={tag}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <hr />

          <div className="article-actions" />

          <div className="row">
            <CommentContainer
              comments={this.props.comments || []}
              errors={this.props.commentErrors}
              slug={this.props.params.id}
              currentUser={this.props.currentUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
