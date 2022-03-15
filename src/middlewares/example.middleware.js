const myMiddleware = (req, res, next) => {
  //do stuff
  next();
};

module.exports = {
  myMiddleware,
};
