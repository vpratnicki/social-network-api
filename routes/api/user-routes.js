const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
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

// set POST and DELETE by user id /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend); 



module.exports = router;