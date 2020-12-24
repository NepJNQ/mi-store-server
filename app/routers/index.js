/*
 * @Description: 路由汇总
 * @Author: Nep
 * @Date: 2020-12-17 19:29:40
 * @LastEditTime: 2020-12-22 15:44:33
 */
const router = require("koa-router")();
let { pathPrefix } = require("../../config");

const userRouter = require("./router/userRouter");
const productRouter = require("./router/productRouter");
const resourceRouter = require("./router/resourceRouter");

// 路由汇总
router.prefix(pathPrefix);
router.use(userRouter.routes());
router.use(productRouter.routes());
router.use(resourceRouter.routes());

module.exports = router;
