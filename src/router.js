import { createRouter, createWebHistory} from "vue-router"
import Home from "./pages/home.vue"
import Ofertas from "./pages/ofertas.vue"
import Pagamento from "./pages/pagamento.vue"


const routes = [
  { path: '/', component: Home },
  { path: '/produto/:id', component: Ofertas },
  { path: '/pagamento', component: Pagamento },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "link-active"
})

export default router