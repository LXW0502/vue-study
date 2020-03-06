import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'//@就是指src路径
import NewsList from '@/views/news/list'
import NewsIndex from '@/views/news/index'
import NewsDetail from '@/views/news/detail'
import ProductList from '@/views/product/list'
import ProductIndex from '@/views/product/index'
import ProductDetail from '@/views/product/detail'
import Contact from '@/views/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {//配置一个路由
      path: '/',
      name: 'index',
      component: Index
    },
    {//配置一个路由
      path: '/news',
      name: 'news',
      component: NewsIndex,
      children:[
        {//配置一个路由
  	      path: 'list',
  	      name: 'news list',
  	      component: NewsList
    	  },
        {//配置一个路由
          path: 'detail/:id',//相当于一个变量
          name: 'news detail',
          component: NewsDetail
        },
      ]     
    },
    {//配置一个路由
      path: '/product',
      name: 'product',
      component: ProductIndex,
      children:[
        {//配置一个路由
          path: 'list',
          name: 'product list',
          component: ProductList
        },
        {//配置一个路由
          path: 'detail/:id',//相当于一个变量
          name: 'product detail',
          component: ProductDetail
        },
      ]     
    },
    {//配置一个路由
      path: '/contact',
      name: 'contact',
      component: Contact
    },

  ]
})
