import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "https://codercamps-conduit.herokuapp.com/api";

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set("Authorization", `Token ${token}`);
  }
};
const responseBody = res => res.body;
const omitSlug = article => Object.assign({}, article, { slug: undefined });
const requests = {
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody)
};

const Articles = {
  all: page => requests.get(`/articles?limit=10`),
  del: slug => requests.del(`/articles/${slug}`),
  get: slug => requests.get(`/articles/${slug}`),
  create: article => requests.post("/articles", { article }),
  update: article => requests.put(`/articles/${article.slug}`, { article })
};

const Auth = {
  current: () => requests.get("/user"),
  login: (email, password) =>
    requests.post("/users/login", { user: { email, password } }),
  register: (username, email, password) =>
    requests.post("/users", { user: { username, email, password } }),
  save: user => requests.put("/user", { user })
};

const Comments = {
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  forArticle: slug => requests.get(`/articles/${slug}/comments`),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`)
};

export default {
  Articles,
  Auth,
  Comments,
  setToken: _token => {
    token = _token;
  }
};
