const open_ai_services = require('../services/open_ai');

exports.find_complexity = function (req, res) {
    const {prompt} = req.body;

    return open_ai_services.find_complexity({prompt})
        .then(function (response) {
            return res.status(200).json({
                success: true,
                data: response.data.choices[0].text,
            });
        }).catch(function (error) {
        return res.status(400).json({
            success: false,
            error: error.response
                ? error.response.data
                : "There was an issue on the server",
        });
    })
};

exports.grammar_correction = function (req, res) {
    const {prompt} = req.body;

    return open_ai_services.grammar_correction({prompt})
        .then(function (response) {
            return res.status(200).json({
                success: true,
                data: response.data.choices[0].text.trim(),
            });
        }).catch(function (error) {
        return res.status(400).json({
            success: false,
            error: error.response
                ? error.response.data
                : "There was an issue on the server",
        });
    })
};

exports.chat = function (req, res) {
    const {role, content} = req.body;

    return open_ai_services.chat({role, content})
        .then(function (response) {
            return res.status(200).json({
                success: true,
                data: response.data.choices[0].message,
            });
        }).catch(function (error) {
        return res.status(400).json({
            success: false,
            error: error.response
                ? error.response.data
                : "There was an issue on the server",
        });
    })
};

exports.models = function (req, res) {
    return open_ai_services.models()
        .then(function (response) {
            return res.status(200).json({
                success: true,
                data: response.data.data
            });
        }).catch(function (error) {
        return res.status(400).json({
            success: false,
            error: error.response
                ? error.response.data
                : "There was an issue on the server",
        });
    })
};