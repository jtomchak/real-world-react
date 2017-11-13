import superagentPromise from "superagent-promise";
import _superagent from "superagent";
import ArticleList from "./components/ArticleList";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "https://codercamps-conduit.herokuapp.com/api";

const responseBody = res => res.body;

const requests = {
  get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Articles = {
  all: page => requests.get(`/articles?limit=10`)
};

export default {
  Articles
};
