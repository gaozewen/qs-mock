/**
 * @description 生成答卷列表
 * @author 高泽文
 */

const Mock = require("mockjs");
const getComponentList = require("./getComponentList");
const Random = Mock.Random;

const getStatisticList = (len = 10) => {
  const list = [];
  for (let i = 0; i < len; i++) {
    const item = {
      _id: Random.id(),
    };
    getComponentList(true).forEach((compInfo) => {
      const { fe_id, type, props } = compInfo;
      switch (type) {
        case "input":
          item[fe_id] = Random.ctitle();
          break;
        case "textarea":
          item[fe_id] = Random.ctitle();
          break;
        case "radio":
          item[fe_id] = props.options[0].text;
          break;
        case "checkbox":
          item[fe_id] = `${props.list[0].text},${props.list[1].text}`;
          break;
      }
    });
    list.push(item)
  }
  return list;
};

module.exports = getStatisticList;
