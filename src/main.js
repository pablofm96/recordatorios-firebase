import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(firestorePlugin)
Vue.config.productionTip = false

//import Prueba from './components/prueba.vue'

//Vue.component(Prueba)


// const routes = [
//   { path: '/prueba', component: Prueba, meta: { requiresAuth:false } },
//   {path: '/pie', component: Pie, meta: { requiresAuth:false }}
// ]

// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

//import Firebase from './db'
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)){
//     if(!Firebase.auth.currentUser){
//       next('/pie')
//     } else{
//       next()
//     }
//   } else{
//     next() //make sure to always call next
//   }
// })

new Vue({
  render: h => h(App),
  //router
}).$mount('#app')
