/*
 * @Description: 收藏持久层
 * @Author: Nep
 * @Date: 2020-12-24 14:20:35
 * @LastEditTime: 2020-12-24 20:16:44
 */

const db = require("./db");
module.exports = {
  // 增加收藏
  addCollect: async (uid, pid, time) => {
    const sql =
      "insert into collect(user_id, product_id, collect_time) values (?, ?, ?)";
    return await db.query(sql, [uid, pid, time]);
  },
  // 获取用户所有收藏
  getCollect: async (uid) => {
    const sql = "select * from collect where user_id = ? ";
    return await db.query(sql, uid);
  },
  // 查询单个商品是否在用户收藏
  findCollect: async (uid, pid) => {
    const sql = "select * from collect where user_id = ? and product_id = ?";
    return await db.query(sql, [uid, pid]);
  },
  // 删除该用户的指定收藏
  delCollect: async (uid, pid) => {
    const sql = "delete from collect where user_id=? and product_id=?";
    return await db.query(sql, [uid, pid]);
  },
};
