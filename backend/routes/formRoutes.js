const router = require('express').Router();
const formController = require('../controllers/formController');
const auth = require('../middleware/auth');

// For admins
router.get('/my', auth, formController.getMyForms);
router.post('/create', auth, formController.createForm);
router.get('/:id/responses', auth, formController.getFormResponses);

// For everyone (public form link)
router.get('/:id', formController.getFormById);

module.exports = router;
