const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/router');

router.route('/').get((req, res) => {
  res.json({ message: 'This is completely blank!' });
});

router.use('/user', user);

module.exports = router;
