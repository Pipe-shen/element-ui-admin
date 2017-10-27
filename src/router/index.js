import Vue from 'vue'
import Router from 'vue-router'
// 主视图列表
import Dashboard from 'views/Dashboard'
import Category from 'views/Category'
import Article from 'views/Article'
import Media from 'views/Media'
import Feedback from 'views/Feedback'
import User from 'views/User'
import System from 'views/System'

/*import Hello from 'views/Hello'
import Login from 'views/Login'*/
// import VeeValidateDemo from 'components/vee-validate-demo';

Vue.use(Router)

/**
 * 路由
 * 1. 控制台
 * 2. 分类
 * 3. 内容
 * 4. 媒体库
 * 5. 留言
 * 6. 用户
 * 7. 系统
 */
export default new Router({
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category,
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article,
    },
    {
      path: '/Media',
      name: 'Media',
      component: Media,
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback,
    },
    {
      path: '/User',
      name: 'User',
      component: User,
    },
    {
      path: '/System',
      name: 'System',
      component: System,
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    /*{
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/login/:id',
      name: 'Hello-id',
      component: Hello,
      meta: {
        requireAuth: true,
      },
    },*/
    /*{
      path: '/vee-validate-demo',
      name: 'VeeValidateDemo',
      component: VeeValidateDemo,
    },*/
  ],
})
