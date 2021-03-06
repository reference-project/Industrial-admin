import Vue from "vue";
import Router from "vue-router";
import { routes, otherRouter, mainRouter, appRouter } from "./routers";
import store from "@/store";
import iView from "iview";
import { setToken, getToken, canTurnTo, setTitle } from "@/libs/util";
import config from "@/config";
import { initRouter } from "@/libs/router-util"; // ①新增  引入动态菜单渲染

const { homeName } = config;

Vue.use(Router);

const router = new Router({
  routes
  // 部署到github gh-pages -> 取消history
  // mode: 'history'
});

const LOGIN_PAGE_NAME = "login"; // 登录页
const whiteList = ["erp"]; // 白名单

const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) {
    // 有权限，可访问
    next();
  } else if (to.name === "home") {
    // console.log("准备跳转到首页");
    // console.log(access[0]);
    // 已经登陆并且 "没有home页权限" 的用户新打开首页概览 -> 跳回该用户登录后的首页
    if (access[0] === "workshop_manager") {
      // 车间主管 -> 直接进入驾驶舱-车间
      next({
        name: "control-leader-shop"
      });
    } else if (access[0] === "examine") {
      // 检测员 -> 直接进入追溯查询
      next({
        name: "checkSearch"
      });
    } else if (access[0] === "cestc") {
      // 工程师 -> 直接进入SOP配置
      next({
        name: "sop"
      });
    }
  } else {
    // 无权限，重定向到401页面
    next({
      replace: true,
      name: "error_401"
    });
  }
};

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  const token = getToken();
  if (whiteList.indexOf(to.name) !== -1) {
    // 在免登录白名单
    next(); // 直接进入
  } else if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    });
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页 -> 重新加载不含动态数据的原始路由
    const routes = [...otherRouter, ...mainRouter, ...appRouter];
    router.matcher = new Router({ routes }).matcher;
    next(); // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    });
  } else {
    // 已登录且要跳转的页面不是登录页 -> 添加动态路由
    initRouter();
    if (store.state.user.hasGetInfo) {
      turnTo(to, store.state.user.access, next);
    } else {
      store
        .dispatch("getUserInfo")
        .then(user => {
          // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
          turnTo(to, user.data.user_access, next);
        })
        .catch(() => {
          setToken("");
          next({
            name: "login"
          });
        });
    }
  }
});

router.afterEach(to => {
  setTitle(to, router.app);
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
