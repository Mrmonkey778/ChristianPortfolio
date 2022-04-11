
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/login',
        component: () => import('pages/LoginPage.vue')
      },

      {
        path: '/zygon',
        component: () => import('pages/ZygonPage.vue')
      },
      {
        path: '/fvjiwara',
        component: () => import('pages/FvjiPage.vue')
      },
      {
        path: '/corn',
        component: () => import('pages/CornPage.vue')
      },
      {
        path: '/massivetrackz',
        component: () => import('pages/MassiveTrackzPage.vue')
      },
      {
        path: '/leelodubz',
        component: () => import('pages/LeeloDubzPage.vue')
      },
      {
        path: '/transitions',
        component: () => import('pages/TransitionsPage.vue')
      },
      {
        path: '/about',
        component: () => import('pages/AboutPage.vue')
      }
    ]
  },
  {
    path: '/account',
    component: () => import('layouts/SignupLayout.vue'),
    children: [
      {
        path: '/signup',
        component: () => import('pages/SignupPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
