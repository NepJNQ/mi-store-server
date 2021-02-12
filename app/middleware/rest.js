/*
 * @Description:格式化响应结果
 * @Author: Nep
 * @Date: 2020-12-17 18:51:29
 * @LastEditTime: 2020-12-25 22:33:58
 */
const ApiError = require("./error/api_error");
const ApiErrorNames = require("./error/api_error_name");

const restify = (pathPrefix) => async (ctx, next) => {
  if (ctx.request.path.startsWith(pathPrefix)) {
    try {
      // 先执行路由
      await next();
      // 任何路由失配错误，抛出ApiError
      if (ctx.response.status === 404) {
        throw new ApiError(ApiErrorNames.NOT_FOUND);
      } else {
        ctx.body = {
          code: "success",
          message: "成功",
          result: ctx.body,
        };
      }
      // 错误捕获：分为三类
    } catch (error) {
      // ApiError
      // 可能来自：路由失配或下层Controller抛出，
      // 处理：将错误信息添加到响应体中返回，前端状态码依旧为200
      if (error instanceof ApiError) {
        ctx.body = {
          code: error.code,
          message: error.message,
        };
        // 401错误：专门处理koa-jwt鉴权报错
      } else if (error.status == 401) {
        ctx.body = {
          code: "401",
          message: "请登录后操作",
        };
        // 其余类型错误(sql错误等)
        // 处理：将错误信息添加到响应体中返回，前端状态码变成400
      } else {
        ctx.status = 400;
        ctx.body = {
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
