const router = require('express').Router();
const responseController = require('../controllers/responseController');

// Public POST
router.post('/:formId', responseController.submitResponse);

module.exports = router;
