/**
 * @description 生成问卷列表
 * @author 高泽文
 */

const Mock = require("mockjs");
const Random = Mock.Random;

const getQuestionnaireList = (opts = {}) => {
  const { len = 10, isStar = false, isDeleted = false } = opts;
  const list = [];
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar: isStar ? true : Random.boolean(),
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isDeleted: isDeleted ? true : Random.boolean(), // 假删除
    });
  }
  return list;
};

module.exports = getQuestionnaireList;
