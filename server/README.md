# Node-Express with Webpack

This boilerplate is a bare minimum setup for Node-Express with Webpack. It only has the server part and doesn't contain any HTML or frontend. It has ES6 code transpile capabilities.

## Tech-stack

This boilerplate consists of the below packages:

- Express Server
- Eslint for linting
- Husky for pre-commit hooks
- ES6 code transpiler
- Webpack bundler

## Usage

### Cloning git repository

```
git clone https://github.com/devarnab/node-express-webpack.git
```

### Installing dependencies

```javascript
npm install
```

Or, if you use yarn, then run: `yarn install`

### In development mode

For development mode, we have to run two commands simultaneously in two terminals. In one terminal first run the below command which will watch the files for changes and compile and bundle it in the `dist` folder.

```javascript
npm run watch
```

Or, yarn users, run: `yarn watch`.

Now, open another terminal and run below command. It will create the server from where the requests will be served.

```javascript
npm run start:dev
```

Or, yarn users, run: `yarn start:dev`

This will start the server at `http://localhost:3000`. We can use [PostMan](https://www.postman.com/downloads/) to interact with the APIs.

### In Production mode

To _Build and Run_ in production mode, run below

```javascript
npm start
```

For yarn users, run: `yarn start`

To **build** the server run the below command

```javascript
npm run build
```

Or, yarn users, run: `yarn build`
