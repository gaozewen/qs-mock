const test = require("./test");
const questionnaire = require("./questionnaire");
const user = require("./user");
const statistic = require("./statistic");

const mockList = [...test, ...questionnaire, ...user, ...statistic];

module.exports = mockList;
