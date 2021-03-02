const express = require('express');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('new', {});
});

router.post('/', function(req, res, next) {
  const { messageText, user } = req.body;

  messages.push({ text: messageText, user: user, added: new Date() });
  
  res.redirect('/');
});

module.exports = router;