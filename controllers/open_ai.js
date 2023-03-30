const open_ai_services = require('../services/open_ai');

exports.homepage = function (req, res) {
    res.status(200).send('OpenAI API');
}