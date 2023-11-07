const Mock = require("mockjs");
const getQuestionnaireList = require("./data/getQuestionnaireList");
const getStatisticList = require("./data/getStatisticList");

const Random = Mock.Random;

module.exports = [
  {
    // 统计列表
    url: "/api/statistic/:questionnaireId",
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
  {
    // 获取单个组件的统计数据汇总
    url: "/api/statistic/:questionnaireId/:componentId",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          statistic: [
            { name: "选项1", count: 20 },
            { name: "选项2", count: 10 },
            { name: "选项3", count: 25 },
          ],
        },
      };
    },
  },
];
