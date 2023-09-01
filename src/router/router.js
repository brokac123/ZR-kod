import { createRouter, createWebHistory } from "vue-router";

import AboutPage from '../components/Pages/AboutPage.vue';
import LandingPage from '../components/Pages/LandingPage.vue';
import ContactPage from '../components/Pages/ContactPage.vue';
import LoginPage from '../components/Pages/LoginPage.vue';
import ShopPage from '../components/Pages/ShopPage.vue';
import SuccessPage from '../components/Stripe/SuccessPage.vue';
import ErrorPage from '../components/Stripe/ErrorPage.vue';
import TheCalculator from '../components/UI/TheCalculator.vue'
import { auth } from '../firebase/config'
const router = createRouter({
    history :  createWebHistory(),
    routes : [
        { path: '/', component: LandingPage,meta:{
            requiresAuth:true,
            showHeaderFooter:true
        }},
        { path: '/shop', component: ShopPage,meta:{
          requiresAuth:true,
          showHeaderFooter:false
      }},
        { path: '/about', component: AboutPage,meta:{
            requiresAuth:true,
            showHeaderFooter:true
        } },
        { path: '/contact', component: ContactPage,meta:{
            requiresAuth:true,
            showHeaderFooter:true
        } },
        { path: '/calculator', component: TheCalculator,meta:{
          requiresAuth:true,
          showHeaderFooter:true
      } },
        {
          path: '/success', component: SuccessPage,meta:{
            requiresAuth:false,
            showHeaderFooter:true,
            redirect: '/'
        }
        },
        {
          path: '/error', component: ErrorPage,meta:{
            requiresAuth:false,
            showHeaderFooter:true
        }
        },
        { path: '/login',component:LoginPage,
        meta: {
            showHeaderFooter: false // Hide header and footer
          }
        }   
    ]
}
)
router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser) {
      next('/')
      return;
    }
  
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
      next('/login')
      return;
    }
    next();
  }) 

export default router;