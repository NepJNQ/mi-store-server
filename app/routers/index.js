/*
 * @Description: 路由汇总
 * @Author: Nep
 * @Date: 2020-12-17 19:29:40
 * @LastEditTime: 2020-12-24 14:28:24
 */
const router = require("koa-router")();
let { pathPrefix } = require("../../config");

const userRouter = require("./router/userRouter");
const productRouter = require("./router/productRouter");
const resourceRouter = require("./router/resourceRouter");
const collectRouter = require("./router/collectRouter");

// 路由汇总
router.prefix(pathPrefix);
router.use(userRouter.routes());
router.use(productRouter.routes());
router.use(resourceRouter.routes());
router.use(collectRouter.routes());

module.exports = router;
