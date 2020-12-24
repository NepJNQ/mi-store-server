/*
 * @Description: 
 * @Author: Nep
 * @Date: 2020-12-17 18:51:29
 * @LastEditTime: 2020-12-18 20:13:56
 */
// 格式化响应结果

const ApiError = require("./error/api_error");
const ApiErrorNames = require("./error/api_error_name");

const restify = (pathPrefix) => async (ctx, next) => {
  if (ctx.request.path.startsWith(pathPrefix)) {
    try {
      // 先执行路由
      await next();

      if (ctx.response.status === 404) {
        throw new ApiError(ApiErrorNames.NOT_FOUND);
      } else {
        ctx.body = {
          code: "success",
          message: "成功",
          result: ctx.body,
        };
      }
    } catch (error) {
      // 如果异常类型是API异常，将错误信息添加到响应体中返回
      if (error instanceof ApiError) {
        ctx.body = {
          code: error.code,
          message: error.message,
        };
      } else {
        // 其余类型错误
        ctx.status = 400;
        ctx.response.body = {
          code: error.name,
          message: error.message,
        };
      }
    }
  } else {
    await next();
  }
};
module.exports = restify;
