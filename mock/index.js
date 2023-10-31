const test = require("./test");
const questionnaire = require("./questionnaire");
const user = require("./user");

const mockList = [...test, ...questionnaire,...user];

module.exports = mockList;
