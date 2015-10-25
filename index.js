var express = require('express')
  , cors = require('cors')
  , bodyParser = require('body-parser')
  , app = express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/blogs', function(req, res, next){
  res.json(blogs);
});

app.get('/blogs/:id', function(req, res, next){
  if (blogs[req.params.id]) {
    res.json(blogs[req.params.id]);
  } else {
    res.status(404).send('Post not found');
  }
});

app.put('/blogs/:id', function(req, res, next){
  if (blogs[req.params.id]) {
    blogs[req.params.id] = req.body;
    blogs[req.params.id].id = req.params.id;
    res.json(blogs[req.params.id]);
  } else {
    res.status(404).send('Post not found');
  }
});

app.listen(3000, function(){
  console.log('CORS-enabled web server listening on port 3000');
});

var blogs = {
  1: {
    id: 1,
    title: 'hello world',
    post: 'my first blog post',
    timestamp: new Date(),
    author: 'James Dean'
  },
  2: {
    id: 2,
    title: 'how to get started with angularjs',
    post: 'best way to get started with AngularJs is through using of Yeoman',
    timestamp: new Date(),
    author: 'James Dean'
  },
}
