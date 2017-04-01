/**
 * Emoji 5.0 in a JSON and possibly some helper functions
 */
const emoJson = require('./emoJson.json')
module.exports.getData = function(number, locale) {
    return emoJson;
};
