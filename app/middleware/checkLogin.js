/*
 * @Description: 检查session判断是否登录
 * @Author: Nep
 * @Date: 2020-12-18 21:35:41
 * @LastEditTime: 2020-12-18 21:40:16
 */

const ApiError = require("./error/api_error");
const ApiErrorNames = require("./error/api_error_name");

/**
 * @description: 对比传入id和session中的user id
 * @param {Object} ctx
 * @param {String} id
 * @return {*}
 */
module.exports = (ctx, id) => {
  if (id != ctx.session.user.id) {
    throw new ApiError(ApiErrorNames.NO_AUTH, "未登录");
  }
};
