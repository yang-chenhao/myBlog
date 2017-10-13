import Vue from 'vue'
import Router from 'vue-router'
import articel from '@/components/articel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articel',
      component: articel
    }
  ]
})
