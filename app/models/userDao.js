/*
 * @Description: users持久层
 * @Author: Nep
 * @Date: 2020-12-17 18:57:59
 * @LastEditTime: 2020-12-23 18:58:20
 */
const db = require("./db");

module.exports = {
  // 查询所有用户
  getAllUser: async () => {
    const sql = "select * from users";
    return await db.query(sql);
  },
  // 查询用户名称
  getUserByName: async (username) => {
    const sql = "select user_id from users where username = ?";
    return await db.query(sql, [username]);
  },
  // 插入用户信息
  register: async (username, password) => {
    const sql = "insert into users (username, password) values (?, ?)";
    return await db.query(sql, [username, password]);
  },
  // 登录
  login: async (username, password) => {
    const sql = "select * from users where username = ? and password = ?";
    return await db.query(sql, [username, password]);
  },
};
