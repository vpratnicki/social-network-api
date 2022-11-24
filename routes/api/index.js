const router = require('express').Router();
const userRouters = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix of '/users' to routes created in 'user-routes.js
router.use('/users', userRouters)

// add prefix of '/thoughts' to routes created in 'thought-routes.js
router.use('/thoughts', thoughtRoutes);

module.exports = router;