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
          // 组件列表
          componentList: [
            {
              fe_id: Random.id(),
              type: "title",
              title: "标题",
              props: {
                text: "个人信息调研",
                level: 1,
                isCenter: false,
              },
              isHidden: false,
              isLocked: true,
            },
            {
              fe_id: Random.id(),
              type: "input",
              title: "输入框1",
              props: {
                title: "你的姓名",
                placeholder: "请输入你的姓名...",
              },
              isHidden: false,
              isLocked: false,
            },
            {
              fe_id: Random.id(),
              type: "input",
              title: "输入框2",
              props: {
                title: "你的电话",
                placeholder: "请输入你的电话...",
              },
              isHidden: false,
              isLocked: false,
            },
          ],
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
