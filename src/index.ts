import Koa from "koa";
import Router from "koa-router";

import Logger from "koa-logger";
import Json from "koa-json";

const app = new Koa();
const router = new Router();

router.get("/", async (ctx, next) => {
    ctx.body = { msg: "hello world" };

    await next();
});

app.use(Json());
app.use(Logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log("koa started");

})