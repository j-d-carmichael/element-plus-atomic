import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const beforeEach = async (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  // ...
  return next();
};
