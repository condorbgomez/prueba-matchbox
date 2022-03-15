// To write your routes in a more fancy way use express-router-group: https://www.npmjs.com/package/express-router-group
// However, if you consider that your application is going to grow a lot, it is advisable to create a routes folder and store the routes by file.

require('express-router-group');
const express = require('express');
const router = express.Router();

// Middlewares
const exampleMiddlewareMock = require('./middlewares/example.middleware');

// Controllers
const { welcomeRouteHandler } = require('./controllers/status.controller');

router.get('/', exampleMiddlewareMock.myMiddleware, welcomeRouteHandler);

module.exports = router;
