/*
 * @Description: user路由
 * @Author: Nep
 * @Date: 2020-12-17 19:26:30
 * @LastEditTime: 2020-12-24 19:17:30
 */
const router = require("koa-router")();
const userController = require("../../controllers/userController");

router.prefix("/user");
router
  .get("/ifNameExists", userController.ifNameExists)
  .post("/login", userController.login)
  .post("/register", userController.register);

module.exports = router;
