/*
 * @Description: 全局配置
 * @Author: Nep
 * @Date: 2020-12-17 19:05:58
 * @LastEditTime: 2020-12-21 16:32:58
 */
const path = require("path");

module.exports = {
  //启动端口
  port: 3000,
  //静态资源目录
  staticDir: path.resolve("./"),
  //路由前缀
  pathPrefix: "/api",

  // 上传文件路径
  uploadDir: path.join(__dirname, path.resolve("public/")),

  // 数据库连接设置
  dbConfig: {
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "storedb",
  },
};
