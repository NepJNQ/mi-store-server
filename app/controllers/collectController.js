/*
 * @Description: 收藏控制层
 * @Author: Nep
 * @Date: 2020-12-24 14:19:48
 * @LastEditTime: 2020-12-25 19:49:42
 */
const ApiError = require("../middleware/error/api_error");
const ApiErrorNames = require("../middleware/error/api_error_name");
const collectDao = require("../models/collectDao");
const productDao = require("../models/productDao");

module.exports = {
  /**
   * @description: 获取用户的所有收藏商品信息
   * @param {Object} ctx
   */
  getCollect: async (ctx) => {
    let { uid } = ctx.request.body;
    // 获取所有收藏信息
    const collect = await collectDao.getCollect(uid);

    let collectList = [];
    // 生成收藏商品的详细信息列表
    for (let i = 0; i < collect.length; i++) {
      const temp = collect[i];
      // 获取每个商品详细信息
      const product = await productDao.getProductById(temp.product_id);
      collectList.push(product[0]);
    }
    ctx.body = collectList;
  },
  /**
   * @description: 添加收藏
   * @param {Object} ctx
   */
  addCollect: async (ctx) => {
    let { uid, pid } = ctx.request.body;
    const exists = await collectDao.findCollect(uid, pid);
    if (exists.length)
      throw new ApiError(ApiErrorNames.ALREADY_EXIST, "已经在收藏中了!");
    const timeTemp = new Date().getTime();
    ctx.body = await collectDao.addCollect(uid, pid, timeTemp);
  },

  /**
   * @description: 删除收藏
   * @param {Object} ctx
   */
  delCollect: async (ctx) => {
    let { uid, pid } = ctx.request.body;
    ctx.body = await collectDao.delCollect(uid, pid);
  },
};
