import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import CreditCard from './views/CreditCard.vue'
import ThankYou from './views/ThankYou.vue'

const routes = [
    {
        path: '/',
        component: CreditCard
    },
    {
        path: '/thank-you',
        component: ThankYou
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

createApp(App).use(router).mount('#app')
