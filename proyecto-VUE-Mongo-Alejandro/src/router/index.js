import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/index.vue'
import Nosotros from '../components/nosotros.vue'
import Productos from '../components/productos.vue'
import Articulos from "../components/articulos.vue"
import Contacto from "../components/contacto.vue"
import Admin from '../components/admin.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/nosotros', component: Nosotros},
    { path: '/productos', component: Productos},
    { path: '/articulos', component: Articulos},
    { path: '/contacto', component: Contacto},
    { path: '/admin', component: Admin}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router