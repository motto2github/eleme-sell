var path = require('path');
var express = require('express');
var config = require(path.join(__dirname, 'config', 'index.js'));

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

var appData = require(path.join(__dirname, 'data.json'));

var apiRouter = express.Router();

apiRouter.get('/seller', function (req, res) {
  res.json({code: 0, msg: 'ok', seller: appData.seller});
});

apiRouter.get('/goods', function (req, res) {
  res.json({code: 0, msg: 'ok', goods: appData.goods});
});

apiRouter.get('/ratings', function (req, res) {
  res.json({code: 0, msg: 'ok', ratings: appData.ratings});
});

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'dist')));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  var uri = 'http://localhost:' + port;
  console.log('Listening at ' + uri + '\n');

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    // opn(uri)
  }
});
