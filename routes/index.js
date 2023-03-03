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

// GET form page.
router.get('/new', function(req, res,){
  res.render('form', { title: 'Messages', });
  
});

router.post('/', (req, res) => {
  res.redirect('/new')
})

router.post('/new', (req, res) => {
  // Handle form submission here
const messageText = req.body.user_messages
const messageUser = req.body.user_name_field

  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/')
});



module.exports = router;
