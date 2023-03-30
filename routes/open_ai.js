const open_ai_controller = require('../controllers/open_ai');

const express = require('express');
const router = express.Router();

router.get('/', open_ai_controller.homepage);

module.exports = router;
