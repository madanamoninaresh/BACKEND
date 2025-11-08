// users.js (a separate router file)
const express = require('express');
const router = express.Router();

// Define routes specific to users
router.get('/', (req, res) => {
  res.send('User list');
});

router.get('/thing1', (req, res) => {
  res.send(`This is bird`);
});
router.get('/thing1/:type', (req, res) => {
  res.send(`Hi you are ${req.params.type} and you are an bird`);
});

module.exports = router;
