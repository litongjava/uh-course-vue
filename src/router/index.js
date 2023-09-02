import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {title: 'Institutions'},
  },
  {
    path: '/datas',
    name: 'datas',
    component: () => import('../views/DatasView'),
  },
  {
    path: '/semester',
    name: 'semester',
    component: () => import('../views/SemesterView'),
    meta: {title: 'Semesters'},
  },
  {
    path: '/classes',
    name: 'classes',
    component: () => import('../views/ClassesView'),
    meta: {title: 'Classes'},
  },
  {
    path: '/CourseSingleTable',
    name: 'CourseSingleTable',
    component: () => import('../views/CourseSingleTableView'),
    meta: {title: 'CourseSingleTable'},
  }
];

const router = new VueRouter({
  routes
});

router.afterEach((to, from) => {
  document.title = to.meta.title || 'Default Title';
});

export default router
