import React, { Component } from "react";
import { connect } from "react-redux";
import agent from "../agent";
import ListErrors from "./ListErrors";

const mapStateToProps = state => ({
  ...state.editor
});

const mapStateToDispatch = dispatch => ({
  onSubmit: payload => dispatch({ type: "ARTICLE_SUBMITTED", payload })
});

class Editor extends Component {
  state = {
    title: "",
    description: "",
    body: "",
    tags: []
  };

  //handle input change for all form fields via the name prop
  handleInputChange = event => {
    const targetName = event.target.name;

    this.setState({
      [targetName]: event.target.value
    });
  };

  handleTagEnter = event => {
    if (event.keyCode === 13) {
      this.setState({
        tags: [...this.state.tags, event.target.value]
      });
      this.tagInput = "";
    }
  };

  render() {
    const { title, description, body, tags } = this.state;
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <ListErrors errors={this.props.errors} />

              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="title"
                      placeholder="Article Title"
                      value={title}
                      onChange={this.handleInputChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="description"
                      placeholder="What's this article about?"
                      value={description}
                      onChange={this.handleInputChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      name="body"
                      placeholder="Write your article (in markdown)"
                      value={body}
                      onChange={this.handleInputChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="tag"
                      placeholder="Enter tags"
                      ref={input => (this.tagInput = input)}
                      onKeyUp={this.handleTagEnter}
                    />

                    <div className="tag-list">
                      {(this.props.tagList || []).map(tag => {
                        return (
                          <span className="tag-default tag-pill" key={tag}>
                            <i
                              className="ion-close-round"
                              onClick={this.removeTagHandler(tag)}
                            />
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </fieldset>

                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    disabled={this.props.inProgress}
                    onClick={this.submitForm}
                  >
                    Publish Article
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
