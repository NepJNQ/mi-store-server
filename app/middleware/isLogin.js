/*
 * @Description: 拦截器
 * @Author: Nep
 * @Date: 2020-12-18 21:42:07
 * @LastEditTime: 2020-12-18 22:09:54
 */

const ApiError = require("./error/api_error");
const ApiErrorNames = require("./error/api_error_name");

module.exports = async (ctx, next) => {
  if (ctx.url.startsWith("/api/user/")) {
    if (!ctx.session.user) {
      throw new ApiError(ApiErrorNames.NO_AUTH);
    }
  }
  await next();
};
