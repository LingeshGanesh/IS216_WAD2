import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HTMLBasics from '@/views/HTMLBasicsView.vue'
import JavaScriptDOM from '@/views/JavaScriptDOMView.vue'
import WebAPIs from '@/views/WebAPIsView.vue'
import CSSBasics from '@/views/CSSBasicsView.vue'
import BoxModel from '@/views/BoxModelView.vue'
import CSSLayout from '@/views/CSSLayoutView.vue'
import BootstrapGrid from '@/views/BootstrapGridView.vue'
import BootstrapUtilities from '@/views/BootstrapUtilitiesView.vue'
import BootstrapComponents from '@/views/BootstrapComponentsView.vue'
import VueBasics from '@/views/VueBasicsView.vue'
import VueBinding from '@/views/VueBindingView.vue'
import VueRouter from '@/views/VueRouterView.vue'
import VueEvents from '@/views/VueEventsView.vue'
import Computed from '@/views/ComputedView.vue'
import VueForms from '@/views/VueFormsView.vue'
import VueLists from '@/views/VueListsView.vue'
import Axios from '@/views/AxiosView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
  { path: "/", name: "HomeView", component: HomeView },
  { path: "/html", name: "HTMLBasics", component: HTMLBasics },
  { path: "/javascript-dom", name: "JavaScriptDOM", component: JavaScriptDOM },
  { path: "/web-apis", name: "WebAPIs", component: WebAPIs },
  { path: "/css-basics", name: "CSSBasics", component: CSSBasics },
  { path: "/box-model", name: "BoxModel", component: BoxModel },
  { path: "/css-layout", name: "CSSLayout", component: CSSLayout },
  { path: "/bootstrap-grid", name: "BootstrapGrid", component: BootstrapGrid },
  { path: "/bootstrap-utilities", name: "BootstrapUtilities", component: BootstrapUtilities },
  { path: "/bootstrap-components", name: "BootstrapComponents", component: BootstrapComponents },
  { path: "/vue-basics", name: "VueBasics", component: VueBasics },
  { path: "/vue-binding", name: "VueBinding", component: VueBinding },
  { path: "/vue-router", name: "VueRouter", component: VueRouter },
  { path: "/vue-events", name: "VueEvents", component: VueEvents },
  { path: "/computed", name: "Computed", component: Computed },
  { path: "/vue-forms", name: "VueForms", component: VueForms },
  { path: "/vue-lists", name: "VueLists", component: VueLists },
  { path: "/axios", name: "Axios", component: Axios }
  ]
})

export default router
