import * as VueRouter from 'vue-router'
import DcHeros from './pages/DcHeros';
import Calendar from "./pages/Calendar";
import Home from './pages/Home.vue'
const routes = [
    {
        path:"/",
        component:Home
    },
    {
        path:'/dc-heros',
        component:DcHeros
    },
    {
        path:'/calendar',
        component:Calendar
    },
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
  })

export default router;
