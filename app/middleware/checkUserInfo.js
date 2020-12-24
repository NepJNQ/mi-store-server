const ApiError = require("./error/api_error");
const ApiErrorNames = require("./error/api_error_name");

/*
 * @Description: 校验用户注册信息格式（为了安全，前后端都需要验证）
 * @Author: Nep
 * @Date: 2020-12-18 16:24:12
 * @LastEditTime: 2020-12-24 19:27:47
 */
module.exports = {
  /**
   * @description: 登录校验
   * @param {String} username
   * @param {String} password
   * @return {Boolean}
   */
  checkUserInfo: (username = "", password = "") => {
    if (!username.length || !password.length)
      throw new ApiError(
        ApiErrorNames.ILLEGAL_FORMAT,
        "注册失败，用户名和密码不能为空"
      );
    // 校验规则
    const usernameRule = /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/;
    const passwordRule = /^[a-zA-Z0-9_]{6,15}$/;
    if (!usernameRule.test(username)) {
      throw new ApiError(
        ApiErrorNames.ILLEGAL_FORMAT,
        "注册失败，用户名不合法（字母开头，6-16位，允许字母、数字、下划线）"
      );
    }

    if (!passwordRule.test(password)) {
      throw new ApiError(
        ApiErrorNames.ILLEGAL_FORMAT,
        "注册失败，密码不合法（6-16位字母、数字、下划线组合）"
      );
    }
  },
};
