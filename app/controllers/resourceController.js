/*
 * @Description: 资源控制层
 * @Author: Nep
 * @Date: 2020-12-22 15:35:12
 * @LastEditTime: 2020-12-22 15:38:20
 */

const resourceDao = require("../models/resourceDao");

module.exports = {
  getCarousel: async (ctx) => {
    ctx.body = await resourceDao.getCarousel();
  },
};
