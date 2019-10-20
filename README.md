[![Build Status](https://travis-ci.org/christylaguardia/winerds.svg?branch=master)](https://travis-ci.org/christylaguardia/winerds)

# winerds

[Go to the app](https://wine-nerds.firebaseapp.com/)

## About

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Getting Started

You will need to create an `.env` file with the following:

```text
NODE_ENV=development
REACT_APP_SERVER_URL=http://localhost:3001
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_SENDER_ID=
```

You will also need to an `google-credentials.json` file.

```bash
npm install
npm start
```

[http://localhost:3000/](http://localhost:3000/)

## Tooling

- [Firebase](https://firebase.google.com/)
- [Flamelink CMS](https://flamelink.io/)
- [Redux](https://redux.js.org/)
- [Material UI](https://material-ui.com/)

## Styling

[Material UI Color Pallet](https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=1976D2&secondary.color=FB8C00)

## Deployment

Continuous integration is enabled.

### Manual Deploy

```bash
npm install --global firebase
npm install --global firebase-tools
npm run build
firebase deploy
```
