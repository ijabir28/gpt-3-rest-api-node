const open_ai_controller = require('../controllers/open_ai');

const express = require('express');
const router = express.Router();

router.post('/find_complexity', open_ai_controller.find_complexity);

router.post('/grammar_correction', open_ai_controller.grammar_correction);

module.exports = router;
