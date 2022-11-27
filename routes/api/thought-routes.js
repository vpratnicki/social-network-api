const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Setup GET all and POST at /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// Setup GET one, PUT, and Delete at /api/thoughts/:id
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Setup POST and Delete at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(addReaction)

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)

module.exports = router;