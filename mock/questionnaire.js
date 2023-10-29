const Mock = require("mockjs");

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
];
