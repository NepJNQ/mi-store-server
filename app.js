/*
 * @Description: 入口
 * @Author: Nep
 * @Date: 2020-12-17 19:32:57
 * @LastEditTime: 2020-12-24 20:20:48
 */
const Koa = require("koa");
const koaBody = require("koa-body");
const cors = require("koa2-cors");
const Session = require("koa-session");

let { port, pathPrefix, staticDir } = require("./config");

const app = new Koa();

// cors中间件
app.use(cors());

// 响应 RESTful 中间件(含错误处理)
const restify = require("./app/middleware/rest");
app.use(restify(pathPrefix));

// 静态资源处理中间件
const KoaStatic = require("koa-static");
app.use(KoaStatic(staticDir));

// session中间件
const sessionCofig = require("./app/middleware/sessionConfig");
app.keys = ["session app keys"]; // 不设置keys会报错
app.use(Session(sessionCofig, app));

// 注册拦截器
const koajwt = require("koa-jwt");
app.use(
  koajwt({ secret: "asgq22" }).unless({
    path: [/^\/api\/user/, /^\/api\/resource/, /^\/api\/product/],
  })
);

// 请求体处理中间件
const koaBodyConfig = require("./app/middleware/koaBodyConfig");
app.use(koaBody(koaBodyConfig));

// 路由中间件
const routers = require("./app/routers/index");
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(port, () => {
  console.log(`服务器启动在${port}端口`);
});
