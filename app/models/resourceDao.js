/*
 * @Description: 资源持久层
 * @Author: Nep
 * @Date: 2020-12-22 15:31:42
 * @LastEditTime: 2020-12-22 15:34:46
 */
const db = require("./db");

module.exports = {
  getCarousel: async () => {
    const sql = "select * from carousel";
    return await db.query(sql);
  },
};
