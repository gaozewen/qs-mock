const Mock = require("mockjs");
// require 是 commonjs 规范
// nodejs 默认使用 commonjs 规范

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/test",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          name: Random.cname(),
        },
      };
    },
  },
];
