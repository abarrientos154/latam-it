
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/modulo/:id', component: () => import('pages/Modulo.vue') },
      { path: '/actividad/:modulo_id/:id', component: () => import('pages/Actividad.vue') }
    ]
  },
  { path: '/inicio', component: () => import('pages/Inicio.vue') },
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
