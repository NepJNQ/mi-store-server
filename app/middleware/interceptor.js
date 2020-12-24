/*
 * @Description: 后端拦截器
 * @Author: Nep
 * @Date: 2020-12-24 11:42:55
 * @LastEditTime: 2020-12-24 12:00:50
 */

// 拦截
const jwt = require("jsonwebtoken");
module.exports = {
  setToken: (payload) => {
    // 密钥
    const secret = "asgq22";
    // 可选：过期时间
    const options = { expiresIn: "2h" };
    const token = jwt.sign(payload, secret, options);
    return token;
  },
};
