const Mock = require("mockjs");
const getQuestionnaireList = require("./data/getQuestionnaireList");

const Random = Mock.Random;

module.exports = [
  {
    // 获取单个问卷
    url: "/api/questionnaire/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
        },
      };
    },
  },
  {
    // 创建问卷
    url: "/api/questionnaire",
    method: "post",
    response() {
      return {
        errno: 0,
        // errno: 3132,
        // msg: '错误测试',
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    // 获取（查询）问卷列表
    url: "/api/questionnaire",
    method: "get",
    response(ctx) {
      const { url = "" } = ctx;
      const isStar = url.indexOf("isStar=true") >= 0;
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      return {
        errno: 0,
        data: {
          list: getQuestionnaireList({ isStar, isDeleted }),
          total: 100, // 总条数
        },
      };
    },
  },
];
