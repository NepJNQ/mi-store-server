/*
 * @Description: 收藏路由
 * @Author: Nep
 * @Date: 2020-12-24 14:25:11
 * @LastEditTime: 2020-12-24 19:12:54
 */
const router = require("koa-router")();
const collectController = require("../../controllers/collectController");

router.prefix("/collect");
router
  .post("/getCollect", collectController.getCollect)
  .post("/findCollect", collectController.findCollect)
  .post("/delCollect", collectController.delCollect)
  .post("/addCollect", collectController.addCollect);

module.exports = router;
