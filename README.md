

<!-- TOC -->

- [Redux codebase containing real world examples (CRUD, auth, advanced patterns, etc)](#redux-codebase-containing-real-world-examples-crud-auth-advanced-patterns-etc)
  - [Getting started](#getting-started)
  - [Functionality overview](#functionality-overview)
- [Part 01](#part-01)
- [Part 02](#part-02)
- [Part 03](#part-03)
- [Part 04](#part-04)
- [Part 05](#part-05)
- [Part 06](#part-06)
- [Part 07](#part-07)
- [Part 08](#part-08)
- [Part 09](#part-09)
- [Part 10](#part-10)
- [Part 11](#part-11)
- [Part 12](#part-12)
- [Part 13](#part-13)

<!-- /TOC -->



> Example React + Redux codebase that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) spec and API.

# Redux codebase containing real world examples (CRUD, auth, advanced patterns, etc)
Originally created for this [GH issue](https://github.com/reactjs/redux/issues/1353). The codebase is now feature complete and the RFC is open. **Your input is greatly appreciated; please submit bug fixes via pull requests & feedback via issues**.

We're currently working on some docs for the codebase (explaining where functionality is located, how it works, etc) but most things should be self explanatory if you have a minimal understanding of React/Redux.

## Getting started

You can view a live demo over at https://react-redux.realworld.io/

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm run watch` to have webpack bundle the JS files into /bin/main.js, then run `npm start`

For convenience, we have a live API server running at https://conduit.productionready.io/api for the application to make requests against. You can view [the API spec here](https://github.com/GoThinkster/productionready/blob/master/API.md) which contains all routes & responses for the server. We'll release the backend code in a few weeks should anyone be interested in it.

## Functionality overview

The example application is a social blogging site (i.e. a Medium.com clone) called "Conduit". It uses a custom API for all requests, including authentication. You can view a live demo over at https://redux.productionready.io/

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU* users (sign up & settings page - no deleting required)
- CRUD Articles
- CR*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - List of tags
    - List of articles pulled from either Feed, Global, or by Tag
    - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
    - Use JWT (store the token in localStorage)
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
    - Delete article button (only shown to article's author)
    - Render markdown from server client side
    - Comments section at bottom of page
    - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/@username, /#/@username/favorites )
    - Show basic user info
    - List of articles populated from author's created articles or author's favorited articles


# Part 01
* Wire up redux in the index.js
* Set App Name as Props with mapStateToProps 
* You should now see the app name displayed in your browser!

# Part 02
* CSS is imported via a link tag, check our index.html for deets
* Created Feature Home and Header Component
* Header has our navigation stack in it. sweet
* Home has:
    * index 
    * MainView that will have your global feed and popular tags
    * Banner, that is just sweet. 

# Part 03
* Create our ArticleList Component
    * ~~2~~ 3 scenarios: we either have articles not existing (fetching from server) or no articles at all. 
* Fetch some articles. from ```https://codercamps-conduit.herokuapp.com/api```
    * using superAgent to create Articles 
    * we'll be able to append a bunch of other http requests to our agent as we move along. 

# Part 04
* we are gonna dispatch an action on 'componentWillMount' for our component ```onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })``` 
* Created a middleware.js to handle the Promise with promiseMiddleware. This will be a collection of functions that will run when we dispatch actions, modify it in some way if it meets some conditional, then pass it on to the store via dispatch. 
* Redux has a method ```applyMiddleware``` which will take functions, and apply them to actions. 
* Now we can just pass the promise in a dispatch, and it will be resolved, before headed off to the store for reducing. Sweet!!!
* now we should have our articles conosole logged out if we put ```console.log(action.paylaod)``` in our reducer in the root index.js


# Part 05
* Now that we've got our first dipatch to reducers working. Let's set up the switch statement to catch on the action type "HOME_PAGE_LOADED"
* Create and Build Out the ArticlePreview component 
* Add the ArticlePreview component in the ArticleList component

# Part 06
* Refactor to make room for routing. Remove all store stuff from index.js and place into a new file called store.js.
* Let's add some basic routing for our App and it's nested component. We can't hard code home into anymore(App.js Line 19), because it's not always going to be home, it might be something else, like profile or new article. 


# Part 07
* Create the Login component
* Create a link to the login page in the Header component

# Part 08 
* create the reducers directory and refactor out the global feed reducer
* common reducer
* auth.js reducer file
* added combineReducer
* Update the App component & Home component & MainView component
* agent for POST to api/users/login
* Login methods
* Tackle the reducer for auth, we should have auth properties username, email, token. These _should_ be available as props on the Login component with successful login. Use creds below. 
```js
email:
"demo_22@codercamps.com"
password:
"testing001"
```

# Part 09
* Create a ListErrors Component that will take errors as prop, and render's an unordered list
* Errors _should_ be an array of objects,
* Also, if the state says there's an auth request in progress, we'll disable the submit button.
* 'ASYNC_START' what will trigger a conditional in it's respective store propterty to let us know when an async http request is in progress

# Part 10
* Some redirects on login
* added additional action to the common reducer,
* learned about componentWillReceiveProps as a lifecycle method. sweet
* wire up dispatch to 'REDIRECT' to stop the router from constantly redirecting
* Note to us, react router v4 using a component [v4](https://reacttraining.com/react-router/web/example/auth-workflow)

# Part 11
* ```npm install superagent-jwt``` or ```yarn add superagent-jwt``` we are leveraging this to fetch and append the jwt from localstorage on http request
* Localstorge as a middleware, what is local middleware
* Set up localstore to capture the jwt. 
* all get and post requests now pull the jwt from localstorage and append correctly to the header
* reducer APP_LOAD to 'rehydrate' our redux store and make the currentUser request

# Part 12
* Accessing & Displaying Authentication Status Sweet. 
* Update the Header component
* pass currentUser to it via props 
* We'll need Postman to test the API endpoints with. Check it out [HERE](https://www.getpostman.com/)

# Part 13
* Register Users!!!
* agent post auth register
* auth reducer to handle 'REGISTER' a lot like login
* common reducer to redirect and capture the currentUser!
* Sweet. Now make a user. 


