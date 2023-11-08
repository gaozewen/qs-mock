const Mock = require("mockjs");
const getQuestionnaireList = require("./data/getQuestionnaireList");
const getComponentList = require("./data/getComponentList");

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
          desc: Random.cparagraph(),
          js: "",
          css: "",
          isPublished: true,
          isDeleted: false,
          // 组件列表
          // 问卷编辑页用
          // componentList: getComponentList(),
          // 统计页用
          componentList: getComponentList(true),
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
      const { url = "", query = {} } = ctx;
      const isStar = url.indexOf("isStar=true") >= 0;
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const pageSize = parseInt(query.pageSize) || 10;
      return {
        errno: 0,
        data: {
          list: getQuestionnaireList({ isStar, isDeleted, len: pageSize }),
          total: 100, // 总条数
        },
      };
    },
  },
  {
    // 更新问卷
    url: "/api/questionnaire/:id",
    method: "patch",
    response() {
      return {
        errno: 0,
      };
    },
  },
  {
    // 复制问卷
    url: "/api/questionnaire/duplicate/:id",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    // 批量彻底删除问卷
    url: "/api/questionnaire",
    method: "delete",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
