/*
 * @Description: product路由
 * @Author: Nep
 * @Date: 2020-12-17 20:23:46
 * @LastEditTime: 2020-12-23 15:45:21
 */
const router = require("koa-router")();
const productController = require("../../controllers/productController");

router.prefix("/product");
router
  .get("/category", productController.getCategory)
  .get("/categoryId", productController.getCategoryId)
  .post("/homeProduct", productController.getHomeProduct)
  .post("/hotProduct", productController.getHotProduct)
  .get("/allProduct", productController.getAllProduct)
  .get(
    "/productByCategoryId",
    productController.getProductByCategoryId
  )
  .get("/productById", productController.getProductById)
  .get("/productPicById", productController.getProductPicById)
  .post("/details",productController.getDetails);

module.exports = router;
