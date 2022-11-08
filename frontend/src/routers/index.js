import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/components/MovieIndexPage'
import Show from '@/components/MovieDetailPage'
import App from '@/App'

const routes =[
    {
        path: '/',
        name: 'index',
        component: Index

    },
    {
        path: '/:id',
        name: 'show',
        component: Show
    }
]

const router = createRouter({
    history: createWebHistory,
    routes
})

const app = createApp(App);

app.use(router).$mount("#app")