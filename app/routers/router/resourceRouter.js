/*
 * @Description: 资源路由
 * @Author: Nep
 * @Date: 2020-12-22 15:38:57
 * @LastEditTime: 2020-12-22 15:42:04
 */
const resourceController = require("../../controllers/resourceController");
const router = require("koa-router")();

router.prefix("/resource");
router.post("/carousel", resourceController.getCarousel);

module.exports = router;
