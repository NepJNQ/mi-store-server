/*
 * @Description: 全局配置
 * @Author: Nep
 * @Date: 2020-12-17 19:05:58
 * @LastEditTime: 2020-12-24 23:37:16
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

  // koa-body配置
  koaBodyConfig: {
    multipart: true, // 开启文件上传
    formidable: {
      uploadDir: this.uploadDir, // 上传目录
      keepExtensions: true, // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小限制
      onFileBegin: (name, file) => {
        // 文件上传前的设置
        console.log(`name: ${name}`);
        console.log(file);
      },
    },
  },

  // jsonwebtoken配置
  jwtConfig: {
    secret: "asgq22",
    expiresIn: "2h",
  },
  // koa-jwt配置
  koajwtConfig: {
    secret: "asgq22",
    whitelist: [/^\/api\/user/, /^\/api\/resource/, /^\/api\/product/],
  },

  // session配置
  sessionConfig: {
    // 默认cookies存储
    key: "koa:session",
    maxAge: 86400000, // cookie有效期
    overwrite: true,
    httpOnly: true, // 是否可以通过JS修改cookie，防止XSS
    signed: true,
    rolling: false, // 更新策略
    renew: false, // 更新策略
    // 外部存储session
    store: {
      storage: {},
      get(key) {
        return this.storage[key];
      },
      set(key, session) {
        this.storage[key] = session;
      },
      destroy(key) {
        delete this.storage[key];
      },
    },
  },

  // 数据库连接设置
  dbConfig: {
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "storedb",
  },
};
