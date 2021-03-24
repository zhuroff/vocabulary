import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    meta: { layout: 'AppAuthorized' },
    component: () => import( /* webpackChunkName: 'dashboard' */ '@pages/AppDashboard')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
