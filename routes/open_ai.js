const open_ai_controller = require('../controllers/open_ai');

const express = require('express');
const router = express.Router();

router.post('/find_complexity', open_ai_controller.find_complexity);

module.exports = router;
