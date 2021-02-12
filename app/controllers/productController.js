/*
 * @Description: product控制层
 * @Author: Nep
 * @Date: 2020-12-19 15:28:07
 * @LastEditTime: 2020-12-23 15:41:28
 */
const productDao = require("../models/productDao");

module.exports = {
  /**
   * @description: 获取产品分类
   * @param {Object} ctx
   */
  getCategory: async (ctx) => {
    ctx.body = await productDao.getCategory();
  },

  /**
   * @description: 根据分类名称获取分类id
   * @param {Object} ctx
   */
  getCategoryId: async (ctx) => {
    let { cname } = ctx.query;
    ctx.body = await productDao.getCategoryId(cname);
  },

  /**
   * @description: 根据分类名称获取首页产品信息
   * @param {Object} ctx
   */
  getHomeProduct: async (ctx) => {
    let { cname } = ctx.request.body;
    const cid = await productDao.getCategoryId(cname);
    ctx.body = await productDao.getHomeProduct(cid);
  },

  /**
   * @description:接收数组，根据分类名称获取热门产品信息
   * @param {Object} ctx
   */
  getHotProduct: async (ctx) => {
    let { cname } = ctx.request.body;
    const cids = [];
    for (let i = 0; i < cname.length; i++) {
      await productDao.getCategoryId(cname[i]).then((cid) => {
        cids.push(cid);
      });
    }
    ctx.body = await productDao.getProductByCategoryId(cids, 0, 8);
  },

  /**
   * @description: 分页获取所有商品信息
   * @param {Object} ctx
   */
  getAllProduct: async (ctx) => {
    let { currPage, pageSize } = ctx.query;
    const offset = (currPage - 1) * pageSize;
    const product = await productDao.getAllProduct(offset, pageSize);
    const total = (await productDao.getAllProduct()).length;
    ctx.body = {
      product: product,
      total: total,
    };
  },

  /**
   * @description: 根据分类id，分页获取商品信息
   * @param {Object} ctx
   */
  getProductByCategoryId: async (ctx) => {
    let { cid, currPage, pageSize } = ctx.query;
    // 开始索引
    const offset = (currPage - 1) * pageSize;
    const product = await productDao.getProductByCategoryId(
      cid,
      offset,
      pageSize
    );
    const total = (await productDao.getProductByCategoryId(cid)).length;
    ctx.body = {
      product: product,
      total: total,
    };
  },

  /**
   * @description: 根据商品自身id，获取商品详细信息
   * @param {Object} ctx
   */
  getProductById: async (ctx) => {
    let { pid } = ctx.query;
    ctx.body = await productDao.getProductById(pid);
  },

  /**
   * @description: 根据商品id，获取商品图片路径
   * @param {Object} ctx
   */
  getProductPicById: async (ctx) => {
    let { pid } = ctx.query;
    ctx.body = await productDao.getProductPicById(pid);
  },

  /**
   * @description: 根据商品id，获取商品详情(含图片)
   * @param {Object} ctx
   */
  getDetails: async (ctx) => {
    let { pid } = ctx.request.body;
    const details = await productDao.getDetails(pid);
    const detailsPic = await productDao.getDetailsPic(pid);
    ctx.body = {
      details: details,
      detailsPic: detailsPic,
    };
  },
};
