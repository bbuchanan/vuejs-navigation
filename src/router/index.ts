import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello'
import Another from '@/components/Another'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/another',
      name: 'Another',
      component: Another
    }
  ]
});
