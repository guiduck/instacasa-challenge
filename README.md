# WEB

### Overview

  This is a simple client side aplication made using NextJS, Typescript, eslint, prettier, Chakra-ui and Axios. 
  The app is a simple website that lists some users obtained by the api
  
  [Check out live!](https://instacasa-challenge-6hk069fbh-guiduck.vercel.app)
  
This project was bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

## Presentation
### Screenshots

![presentation](https://github.com/guiduck/instacasa-challenge/blob/main/web/public/images/gifpresentation.gif)
![colortheme](https://github.com/guiduck/instacasa-challenge/blob/main/web/public/images/welcomedark.jpeg)
![usersDark](https://github.com/guiduck/instacasa-challenge/blob/main/web/public/images/usersDark.jpeg)
![details](https://github.com/guiduck/instacasa-challenge/blob/main/web/public/images/detailslight.jpeg)

## Tech Stack
### Devlopment
* UI: [React](https://reactjs.org/)
* State Control: [Context](https://pt-br.reactjs.org/docs/context.html) for global state e [React Hooks](https://reactjs.org/docs/hooks-intro.html) for local state
* Styling: [Chakra-ui](https://chakra-ui.com) 
* HTTP Client: [Axios](https://github.com/axios/axios)
* Icons: [Chakra-ui](https://chakra-ui.com/docs/media-and-icons/icon) and [react-icons](https://react-icons.github.io/react-icons/icons?name=ai)

### API
* [json Placeholder](https://jsonplaceholder.typicode.com)

### Linter
* [Prettier](https://github.com/prettier/prettier)
* [ESLint](https://github.com/eslint/eslint)

## Usage
### Comands

Install dependencies:

```sh
yarn (or npm i)
```

Done! Start the service:

```sh
yarn dev
```

#Development mode

```sh
# run the app in development mode
yarn dev
# next dev starts the application in development mode with hot-code reloading, error reporting, and more.
```
#Production mode

```sh
# When building the Next.js app for production, you'll want to use next build:
next build
# next build creates an optimized production build of your application. The output displays information about each route.

Size – The number of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies.
First Load JS – The number of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric.

# Followed by either next start, when you want to start the production server:
next start
# next start starts the application in production mode. The application should be compiled with next build first.

# Or next export, when exporting the app as static HTML:
next export
# next export allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.

# For more information refer to  docs.

For more information refer to * [Next.js CLI](https://nextjs.org/docs/api-reference/cli) docs.
```

## Project Structure

* `src/` code base;
* `src/hooks` config and custom hook for data fetch, used to get the token and messages in this project;
* `src/components` components isolated with its styling (if any);
* `src/context` the QuizContext used for global state control of the quiz related data;
* `src/Pages/` first level router components;
* `src/services/` api default configuration;
