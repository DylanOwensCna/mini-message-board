var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there cruel World!",
    user: "Pizza",
    added: new Date()
  },
  {
    text: "Issa me!",
    user: "Mario",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MessageBoard', messages: messages });
});

// router.get('/new', function(req, res){
//   res.render('form', { title: 'New Message'});
// });

// router.post('/new', (req, res) => {
//   // Handle form submission here
// });

module.exports = router;
