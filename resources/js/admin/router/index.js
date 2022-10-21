import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin/",
    name: "Home",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/admin/login",
    name: "login",
    meta: { layout: "auth" },
    component: () => import("../views/Login.vue")
  },
  // {
  //   path: "/admin/register",
  //   name: "register",
  //   meta: { layout: "auth" },
  //   component: () => import("../views/Register.vue")
  // },
  {
    path: "/admin/categories",
    name: "categories",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/admin/detail-record",
    name: "detail-record",
    meta: { layout: "main", auth: true },
    component: () => import("../views/DetailRecord.vue")
  },
  {
    path: "/admin/journal",
    name: "journal",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Journal.vue")
  },
  {
    path: "/admin/planning",
    name: "planning",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Planning.vue")
  },
  {
    path: "/admin/profile",
    name: "profile",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/admin/record",
    name: "record",
    meta: { layout: "main", auth: true  },
    component: () => import("../views/Record.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
    const currentUser = localStorage.getItem('token')
    const requireAuth = to.matched.some(record => record.meta.auth)
    if (requireAuth && !currentUser){
        next('/admin/login?message=login')
    }
    else {
        next()
    }
})

export default router;
