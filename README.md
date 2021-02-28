# Nextjs Firebase Mongodb w/ Custom Server deployed on Heroku

- This project is improved based on [Udemy](https://www.udemy.com/course/react-nextjs-firebase-nodejs-mongodb-authentication/) course. It is a small boilerplate auth app combination of Firebase, Mongodb, Express.js and Nextjs.
- Custom Server inspired by [this repo](https://github.com/mars/heroku-nextjs-custom-server-express/blob/master/server.js)
  
## :rocket: Quick Start

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


### Install Dependencies

`cd client`

`npm install`


### Run both Express & React from root

`npm run dev`


### Build for production

`cd client`

`npm run build`

Check in browser on http://localhost:8000/



## :trophy: Deploy to Heroku

This may not be ideal approach but works

`git checkout -b production`

`git add -f .env next.config.js serviceAccountKey.json`

**DON'T PUSH THE PRODUCTION BRANCH TO GITHUB**

`git commit -m 'ready to deploy'`

`heroku create`

`git push heroku production:main`

If you want to rename your app follow [this link](https://devcenter.heroku.com/articles/renaming-apps)


## In the near future those features will be added

- Tailwind css
- More helper/util functions
- Custom hooks

