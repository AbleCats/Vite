import { createRouter, createWebHashHistory } from "vue-router"

import login from './login.router.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...login,
    {
      path: '/',
      name: '',
      component: () => import("@/views/HelloWorld.vue")
    }
  ],
});

export default router;
