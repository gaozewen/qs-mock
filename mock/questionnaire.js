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
              type: "info",
              title: "问卷信息",
              props: {
                title: "问卷标题",
                desc: "问卷描述...",
              },
              isHidden: false,
              isLocked: false,
            },
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
              isLocked: false,
            },
            {
              fe_id: Random.id(),
              type: "paragraph",
              title: "段落",
              props: {
                text: "一段段落",
                isCenter: false,
              },
              isHidden: false,
              isLocked: false,
            },
            {
              fe_id: Random.id(),
              type: "input",
              title: "输入框",
              props: {
                title: "你的姓名",
                placeholder: "请输入你的姓名...",
              },
              isHidden: false,
              isLocked: false,
            },
            {
              fe_id: Random.id(),
              type: "textarea",
              title: "多行输入框",
              props: {
                title: "你的爱好",
                placeholder: "请输入你的爱好...",
              },
              isHidden: false,
              isLocked: false,
            },
            {
              fe_id: Random.id(),
              type: "radio",
              title: "单选框",
              props: {
                title: "单选标题",
                options: [
                  { text: "选项1", value: "item1" },
                  { text: "选项2", value: "item2" },
                  { text: "选项3", value: "item3" },
                ],
                // 默认选中
                value: "",
                isVertical: false,
              },
              isHidden: false,
              isLocked: false,
            },
            {
              fe_id: Random.id(),
              type: "checkbox",
              title: "多选框",
              props: {
                title: "多选标题",
                list: [
                  { text: "选项1", value: "item1", checked: false },
                  { text: "选项2", value: "item2", checked: false },
                  { text: "选项3", value: "item3", checked: false },
                ],
                isVertical: false,
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
