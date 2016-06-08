/**
 * Created by shatyajeet on 07/06/16.
 */

var renderRouter = require('express').Router();

renderRouter.get('*', function (req, res) {
  res.sendFile('index.html', {root: './dist'});
});

module.exports = renderRouter;
