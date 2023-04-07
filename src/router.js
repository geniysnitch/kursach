import {createRouter, createWebHistory} from "vue-routing";
import LoginForm from '@/pages/LoginForm.vue';
import SignUpForm from "@/pages/SignUpForm"
import AccountProfile from "@/pages/AccountProfile.vue"
import PasswordReset from "@/pages/PasswordReset.vue"
import PasswordChange from "@/pages/PasswordChange.vue"
import home from "@/pages/home.vue"





const routes = [
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpForm,
      },
      {
        path: '/profile',
        name: 'profile',
        component: AccountProfile,
      },
      {
        path:'/reset_password',
        name:'reset_password',
        component:PasswordReset,
      },
      {
        path:'/change_password',
        name:'change_password',
        component:PasswordChange,
      }
  ];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;