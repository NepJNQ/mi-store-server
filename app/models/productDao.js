/*
 * @Description: product持久层
 * @Author: Nep
 * @Date: 2020-12-19 15:29:42
 * @LastEditTime: 2020-12-23 15:31:26
 */
const db = require("./db");

module.exports = {
  // 获取所有产品分类
  getCategory: async () => {
    const sql = "select * from category";
    return await db.query(sql);
  },

  // 根据分类名称获取分类id
  getCategoryId: async (categoryName) => {
    const sql = "select category_id from category where category_name = ?";
    const category = await db.query(sql, [categoryName]);
    return category[0].category_id;
  },

  //根据分类id获取首页产品信息,获取类别下销量排名前8的产品
  getHomeProduct: async (categoryId) => {
    const sql =
      "select * from product where category_id = ? order by product_sales desc limit 8";
    return await db.query(sql, categoryId);
  },

  // 分页获取所有商品信息,传入偏移和行数
  getAllProduct: async (offset = 0, rows = 0) => {
    let sql = "select * from product ";
    if (rows) {
      sql += "limit " + offset + "," + rows;
    }
    return await db.query(sql);
  },

  // 根据分类id，分页获取商品信息
  getProductByCategoryId: async (categoryId, offset = 0, rows = 0) => {
    let sql = "select * from product where category_id = ? ";
    for (let i = 0; i < categoryId.length - 1; i++) {
      sql += "or category_id = ? ";
    }
    if (rows) {
      sql += "order by product_sales desc limit " + offset + "," + rows;
    }
    return await db.query(sql, categoryId);
  },

  // 根据商品自身id，获取商品详细信息
  getProductById: async (productId) => {
    const sql = "select * from product where product_id = ?";
    return await db.query(sql, productId);
  },

  // 根据商品id，获取商品图片路径
  getProductPicById: async (productId) => {
    const sql = "select * from product_picture where product_id = ?";
    return await db.query(sql, productId);
  },

  // 根据商品id，获取商品详情
  getDetails: async (productId) => {
    const sql = "select * from product where product_id = ?";
    return await db.query(sql, productId);
  },
  // 根据商品id，获取商品详情图
  getDetailsPic: async (productId) => {
    const sql = "select * from product_picture where product_id = ?";
    return await db.query(sql, productId);
  },
};
