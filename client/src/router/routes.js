
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/video/:id', component: () => import('pages/Video.vue') }
    ]
  },
  { path: '/splash', component: () => import('pages/Splash.vue') },
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '*',
    redirect: '/splash'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
