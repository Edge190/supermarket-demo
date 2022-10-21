import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'Main',
        redirect:'/home',
        component: () => import('../views/Main.vue'),
        children: [
          {
            path: '/home',
            name: 'home',
            component:()=>import('../views/home')
          },
          {
            path: '/mall',
            name: 'mall',
            component:()=>import('../views/mall')
          },
          {
            path: '/order',
            name: 'order',
            component:()=>import('../views/order')
          },
         
              {
                path: '/page1',
                name: 'page1',
                component:()=>import('../views/other/pageOne.vue')
              },
              {
                path: '/page2',
                name: 'page2',
                component:()=>import('../views/other/pageTwo.vue')
              }
  
        ]
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/login')
    }
    
]

const router = new VueRouter({
    mode:'history',
    routes
})

router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  let token = store.state.user.token
  if(!token && to.name !== 'login') {
    // console.log("123+token",token)
    next({name:'login'})
  } 
  else if (token&&to.name === 'login') {
    // console.log("456+token",token)
    next({name:'home'})
  } 
  else {
    next()
  }
})

export default router

