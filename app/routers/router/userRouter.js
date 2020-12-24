/*
 * @Description: user路由
 * @Author: Nep
 * @Date: 2020-12-17 19:26:30
 * @LastEditTime: 2020-12-23 22:32:19
 */
const router = require("koa-router")();
const userController = require("../../controllers/userController");

router
  .get("/user", userController.getUserByName)
  .get("/ifNameExists", userController.ifNameExist)
  .post("/login", userController.login)
  .post("/register", userController.register);

module.exports = router;
