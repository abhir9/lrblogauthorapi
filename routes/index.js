var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://www.loginradius.com/blog/async/page-data/author/'+req.query.authorname+'/page-data.json',
  headers: { }
};

axios(config)
.then(function (response) {
  res.send(response.data.result.data.allMarkdownRemark.edges);
})
.catch(function (error) {
  res.send(error.message);
});


});

module.exports = router;
