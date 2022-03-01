// Home router
const app = require('express');
const router = app.Router();
const Types = require('../shared/Types') // Model types

//taskcontroller
const taskController = require('../controllers/taskController');


// Create
router.post('/', taskController.create);

// Get all
router.get('/', taskController.getAll);

// Delete
router.delete('/:id', taskController.deleteById);

// Update
router.put('/', taskController.updateById);

module.exports = router;