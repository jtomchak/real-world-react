<!-- TOC -->

* [![React + Redux Example App](project-logo.png)](#react--redux-example-appproject-logopng)
* [Redux codebase containing real world examples (CRUD, auth, advanced patterns, etc)](#redux-codebase-containing-real-world-examples-crud-auth-advanced-patterns-etc)
  * [Getting started](#getting-started)
  * [Functionality overview](#functionality-overview)
* [Part 01](#part-01)
* [Part 02](#part-02)

<!-- /TOC -->

# ![React + Redux Example App](project-logo.png)

> Example React + Redux codebase that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) spec and API.

# Redux codebase containing real world examples (CRUD, auth, advanced patterns, etc)

Originally created for this [GH issue](https://github.com/reactjs/redux/issues/1353). The codebase is now feature complete and the RFC is open. **Your input is greatly appreciated; please submit bug fixes via pull requests & feedback via issues**.

## Getting started

You can view a live demo over at https://happy-curran-f56088.netlify.com/#/?_k=z407li

To get the frontend running locally:

* Clone this repo `git clone -b 00 --single-branch https://github.com/jtomchak/real-world-react.git meowdium`
* `npm install` to install all req'd dependencies
* `npm run watch` to have webpack bundle the JS files into /bin/main.js, then run `npm start`

For convenience, we have a live API server running at https://conduit.productionready.io/api for the application to make requests against. You can view [the API spec here](https://github.com/GoThinkster/productionready/blob/master/API.md) which contains all routes & responses for the server. We'll release the backend code in a few weeks should anyone be interested in it.

## Functionality overview

The example application is a social blogging site (i.e. a Medium.com clone) called "Conduit". It uses a custom API for all requests, including authentication. You can view a live demo over at https://redux.productionready.io/

**General functionality:**

* Authenticate users via JWT (login/signup pages + logout button on settings page)
* CRU\* users (sign up & settings page - no deleting required)
* CRUD Articles
* CR\*D Comments on articles (no updating required)
* GET and display paginated lists of articles
* Favorite articles
* Follow other users

**The general page breakdown looks like this:**

* Home page (URL: /#/ )
  * List of tags
  * List of articles pulled from either Feed, Global, or by Tag
  * Pagination for list of articles
* Sign in/Sign up pages (URL: /#/login, /#/register )
  * Use JWT (store the token in localStorage)
* Settings page (URL: /#/settings )
* Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
* Article page (URL: /#/article/article-slug-here )
  * Delete article button (only shown to article's author)
  * Render markdown from server client side
  * Comments section at bottom of page
  * Delete comment button (only shown to comment's author)
* Profile page (URL: /#/@username, /#/@username/favorites )
  * Show basic user info
  * List of articles populated from author's created articles or author's favorited articles

# Part 01

* `npm install redux react-redux superagent marked history react-router@2.8.1`
* Wire up redux in the index.js
* Set App Name as Props with mapStateToProps
* You should now see the app name displayed in your browser!

# Part 02

* CSS is imported via a link tag, check our index.html for deets
* Create a `components folder`, we're gonna move our App.js file into it. **BUT leave the index.js file alone** This is the entry point of our appliction to the DOM.
* Created Feature Home and Header Component. Home will be a folder with an index.js, while Header, will be a file `Header.js`
* Header has our navigation stack in it. sweet
* Home has:
  * index
  * MainView that will have your global feed and popular tags
  * Banner, that is just sweet.
