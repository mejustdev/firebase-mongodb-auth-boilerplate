<h1 align="center">
  <img src="client/public/firemon-logo.png" alt="" width="300">
  <br>
</h1>

# Nextjs Firebase Mongodb w/ Custom Server deployed on Heroku

## Table of contents
* [Why Custom Server and Firebase w/ MongoDb](#why-custom-server-and-firebase-w/-mongodb)
* [Quick Start](#quick-start)
* [Deploy to Heroku](#deploy-to-heroku)
* [Feature Plan](#feature-plan)
* [Links](#links)


## Why Custom Server and Firebase w/ MongoDb
1. You can have a look example of custom server express on [Vercel repo](https://github.com/vercel/next.js/tree/master/examples/custom-server-express), another example with [Passport.js](https://auth0.com/blog/next-js-authentication-tutorial/) and [Next-Express.js](https://www.npmjs.com/package/next-express) npm package.
2. According to Next.js [documentation](https://nextjs.org/docs/advanced-features/custom-server)
  - A custom server can not be deployed on *Vercel*. Next.js can be deployed to any hosting provider that supports *Node.js.*
  - `server.js` doesn't go through babel or webpack.
  - A custom server will remove important performance optimizations, like *serverless functions* and [*Automatic Static Optimization*](https://nextjs.org/docs/advanced-features/automatic-static-optimization)( means If `getServerSideProps` or `getInitialProps` is present in a page, Next.js will switch to render the page on-demand, per-request (meaning Server-Side Rendering). If the above is not the case, Next.js will statically optimize your page automatically by prerendering the page to static HTML.)
  
3. Please have a look this [discussion](https://github.com/vercel/next.js/discussions/17563) if you want to learn what are the some gotchas like: 

- With custom server **you can't remap urls that are automatic static optimization**.

4. After building,` next start` starts a Node.js server that supports hybrid pages, serving both statically generated and server-side rendered pages.



 This project is improved based on this [course](https://www.udemy.com/course/react-nextjs-firebase-nodejs-mongodb-authentication/). It is a small boilerplate auth app combination of Firebase, Mongodb, Express.js and Nextjs.
- Custom Server inspired by [this repo](https://github.com/mars/heroku-nextjs-custom-server-express/blob/master/server.js)
  
## Quick Start

### Add project credentials & secrets
  - `.env` ---> client/.env
  - `.next.config.js` ---> client/next.config,js
  - `serviceAccountKey.json` ---> firebase/serviceAccountKey.json


#### `.env`
```
DATABASE= '<mongodb_uri>'
PORT= 8000
```

#### `.next.config.js`
```
module.exports = {
  env: {
    api: '<your_domain>/api',
    passwordResetRedirect: '<your_domain>/login',
    NEXT_PUBLIC_FB_API_KEY: ''
    NEXT_PUBLIC_FB_AUTH_DOMAIN: ''
    FB_PROJECT_ID: ''
    FB_STORAGE_BUCKET:''
    FB_MESSAGING_SENDER_ID: ''
    FB_APP_ID:''
    DATABASE: '<mongodb_uri>' 
    PORT: 8000,
  },
};
```

:collision: Before pushing remote create `.gitignore` file inside `client` folder and add :point_up: those files in there.

- Make sure you have installed `Node.js` and `npm`.
- NOTE: In the rest of the documentation, you will come across npm being used for running commands. To use yarn in place of npm for the commands, simply substitute npm for yarn. Example, npm start as yarn start. For more help, checkout [migrating from npm](https://classic.yarnpkg.com/en/docs/migrating-from-npm/).

### Install Dependencies

`cd client`

`npm install`


### Run both Express & React from root

`npm run dev`

### Build for production

`cd client`

`npm run build`

Check in browser on http://localhost:8000/



## Deploy to Heroku

This may not be ideal approach but works

`git checkout -b production`

`git add -f .env next.config.js serviceAccountKey.json`

**DON'T PUSH THE PRODUCTION BRANCH TO GITHUB**
#### Git Flow 

`git commit -m 'ready to deploy'`

`heroku create`

`git push heroku production:main`

Once you succesfully deploy your app,

- Go to Firebase console add your domain. `Authentication` / `Sign-in Method` / `Authorized domain`
- Update <your_domain> in `next.config.js` with the given domain and follow :point_up: Git Flow again

If you want to rename your app follow [this link](https://devcenter.heroku.com/articles/renaming-apps)


## Feature Plan

- Tailwind css
- More helper/util functions
- Custom hooks

## Contributing

"If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome."

## Links

- Project homepage: https://firemon.herokuapp.com/
- Repository: https://github.com/mejustdev/firebase-mongodb-auth-boilerplate
- Issue tracker: https://github.com/mejustdev/firebase-mongodb-auth-boilerplate/issues
  - In case of sensitive bugs like security vulnerabilities, please contact
    mejustdev@gmail.com directly instead of using issue tracker. I value your effort
    to improve the security and privacy of this project!

## Licensing

"The code in this project is licensed under MIT license."
