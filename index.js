const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");

const mockList = require("./mock/index");

const app = new Koa();
const router = new Router();

const getRes = async (fn, ctx) => {
  return new Promise((resolve) => {
    // 模拟网络请求的 loading 状态，1s
    setTimeout(() => {
      const res = fn(ctx);
      resolve(res);
    }, 1000);
  });
};

// 注册 mock 路由
mockList.forEach((item) => {
  const { url, method, response } = item;
  router[method](url, async (ctx) => {
    // ctx: context 上下文
    const res = await getRes(response, ctx);
    ctx.body = res;
  });
});

// 解决跨域问题
app.use(cors());

app.use(router.routes());

app.listen(3001); // port 端口
