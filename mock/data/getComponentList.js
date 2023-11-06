/**
 * @description 生成组件列表
 * @author 高泽文
 */

const Mock = require("mockjs");
const Random = Mock.Random;

const getComponentList = (isImmutable) => {
  return [
    {
      fe_id: isImmutable ? "c1" : Random.id(),
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
      fe_id: isImmutable ? "c2" : Random.id(),
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
      fe_id: isImmutable ? "c3" : Random.id(),
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
      fe_id: isImmutable ? "c4" : Random.id(),
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
      fe_id: isImmutable ? "c5" : Random.id(),
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
      fe_id: isImmutable ? "c6" : Random.id(),
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
      fe_id: isImmutable ? "c7" : Random.id(),
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
    {
      fe_id: isImmutable ? "c8" : Random.id(),
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
    {
      fe_id: isImmutable ? "c9" : Random.id(),
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
      fe_id: isImmutable ? "c10" : Random.id(),
      type: "textarea",
      title: "多行输入框",
      props: {
        title: "你的爱好",
        placeholder: "请输入你的爱好...",
      },
      isHidden: false,
      isLocked: false,
    },
  ];
};

module.exports = getComponentList;
