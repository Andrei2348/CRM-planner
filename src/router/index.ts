import { createRouter, createWebHistory } from 'vue-router'
import { RouteNamesEnum } from '@/router/router.types'
import { useUserStore } from '@/store/user'
import { getStorageItemWithExpiry } from '@/helpers/localStorageHelpers'

const routes = [
  {
    path: '/',
    name: RouteNamesEnum.projects,
    component: () => import('@/views/ProjectsView/ProjectsView.vue'),
  },
  {
    path: '/project/:id',
    name: RouteNamesEnum.boards,
    component: () => import('@/views/BoardsView/BoardsView.vue'),
  },
  {
    path: '/users/:id',
    name: RouteNamesEnum.users,
    component: () => import('@/views/UsersView/UsersView.vue'),
  },
  {
    path: '/login',
    name: RouteNamesEnum.login,
    component: () => import('@/views/LoginView/LoginView.vue'),
  },
  {
    path: '/register',
    name: RouteNamesEnum.register,
    component: () => import('@/views/RegisterView/RegisterView.vue'),
  },
  {
    path: '/404',
    name: RouteNamesEnum.notFound,
    component: () => import('@/views/NotFoundView/NotFoundView.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: RouteNamesEnum.notFound },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, _, next) => {  
  const userStore = useUserStore()  
  const token = getStorageItemWithExpiry()  

  // Проверяем, если пользователь не авторизован и нет токена  
  if (!userStore.isLoginStatus && !token) {  
    if (to.name !== RouteNamesEnum.login && to.name !== RouteNamesEnum.register) {  
      next({ name: RouteNamesEnum.login })  
    } else {  
      next()  
    }  
  } else if (token && !userStore.isLoginStatus) {  
    // Если токен существует, но пользователь не авторизован
    await userStore.preLoginUserStatus()  
    next()  
  } else {  
    next()  
  }  
})  

export default router
