import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { RouteNamesEnum } from './RouteNamesEnum';
import { beforeEach } from './beforeEach';
import LayoutMain from '~/components/views/LayoutMain.vue';
import DashboardView from '~/components/views/DashboardView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LayoutMain,
    redirect: { name: RouteNamesEnum.dash },
    children: [
      {
        path: '',
        name: RouteNamesEnum.dash,
        component: DashboardView
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
});

router.beforeEach(beforeEach);

export default router;

export const routerGetPathForNamedRoute = (name: string, params: Record<string, string> = {}): string => {
  const route = router.resolve({ name, params });
  return route.href;
};
