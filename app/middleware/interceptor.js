/*
 * @Description: 后端拦截器
 * @Author: Nep
 * @Date: 2020-12-24 11:42:55
 * @LastEditTime: 2020-12-24 22:26:01
 */

// 生成token
const { jwtConfig } = require("../../config");
const jwt = require("jsonwebtoken");
module.exports = {
  setToken: (payload) => {
    // 密钥
    const secret = jwtConfig.secret;
    // 可选：过期时间
    const options = { expiresIn: jwtConfig.expiresIn };
    const token = jwt.sign(payload, secret, options);
    return token;
  },
};
