const test = require("./test");
const questionnaire = require("./questionnaire");
const user = require("./user");
const statistic = require("./statistic");
const answer = require("./answer");

const mockList = [...test, ...questionnaire, ...user, ...statistic, ...answer];

module.exports = mockList;
