const { Router } = require('express');

const router = Router();

// Routes

// const auth = require('./auth.routes');
// router.use('/auth', auth);

const { sample } = require('../controllers');

// router.get('/', async (req, res, next) => {
//   res.send('Welcome to my API');
// });
router.route('/').get(sample.getIndex);

module.exports = router;
