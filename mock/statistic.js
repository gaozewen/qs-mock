const Mock = require("mockjs");
const getQuestionnaireList = require("./data/getQuestionnaireList");
const getStatisticList = require("./data/getStatisticList");

const Random = Mock.Random;

module.exports = [
  {
    // 统计列表
    url: "/api/statistic/:id",
    method: "get",
    response(ctx) {
      const { query = {} } = ctx;
      const pageSize = parseInt(query.pageSize) || 10;
      return {
        errno: 0,
        data: {
          total: 100, // 分页
          list: getStatisticList(pageSize),
        },
      };
    },
  },
];
