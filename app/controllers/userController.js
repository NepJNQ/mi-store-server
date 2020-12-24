/*
 * @Description: user控制层
 * @Author: Nep
 * @Date: 2020-12-17 19:11:24
 * @LastEditTime: 2020-12-24 19:24:08
 */
const userDao = require("../models/userDao");
const ApiError = require("../middleware/error/api_error");
const ApiErrorNames = require("../middleware/error/api_error_name");
const { setToken } = require("../middleware/interceptor");
const { checkUserInfo } = require("../middleware/checkUserInfo");

module.exports = {
  /**
   * @description: 根据username查找用户id是否存在
   * @param {Object} ctx
   */
  ifNameExists: async (ctx) => {
    let username = ctx.query.username;
    let result = await userDao.getUidByName(username);
    result = result.length ? true : false;
    ctx.body = {
      ifNameExists: result,
    };
  },

  /**
   * @description: 登录
   * @param {Object} ctx
   */
  login: async (ctx) => {
    let { username, password } = ctx.request.body;
    // 先校验信息格式
    checkUserInfo(username, password);
    // 尝试登录
    let user = await userDao.login(username, password);
    if (!user.length) {
      throw new ApiError(ApiErrorNames.UNEXIST, "用户名或密码错误");
    }
    // 登录成功，保存状态到session
    user = {
      id: user[0].user_id,
      username: user[0].userName,
    };
    const token = setToken(user);
    ctx.body = {
      user: token,
    };
  },

  /**
   * @description: 注册
   * @param {Object} ctx
   * @return {*}
   */
  register: async (ctx) => {
    let { username, password } = ctx.request.body;

    // 先校验信息格式
    checkUserInfo(username, password);
    // 检查是否已经存在该名称用户
    let user = await userDao.getUidByName(username);
    if (user.length) {
      throw new ApiError(ApiErrorNames.ALREADY_EXIST,"注册失败，用户名已存在");
    }

    // 正式注册
    let registerResult = await userDao.register(username, password);
    ctx.body = {
      message: "注册成功",
      affectedRows: registerResult.affectedRows,
      insertId: registerResult.insertId,
    };
  },
};
