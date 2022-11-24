const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// Set up GET all and POST at api/users
router.route('/')
.get(getAllUsers)
.post(addUser);

// Set up Get, Put and delete by id at /api/users/:id
router.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;