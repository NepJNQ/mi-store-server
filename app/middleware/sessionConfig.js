/*
 * @Description: session中间件配置
 * @Author: Nep
 * @Date: 2020-12-18 21:24:29
 * @LastEditTime: 2020-12-18 21:33:58
 */

const config = {
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
};

module.exports = config;
