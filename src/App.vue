<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <app-header></app-header>    

    <app-main></app-main>   
    <app-footer></app-footer>
  </div>
</template>

<script>
import '@/assets/css/css.css'
import appHeader from '@/components/appHeader';
import appMain from '@/components/appMain';
import appFooter from '@/components/appFooter';
export default {
  name: 'App',
  data(){//储存数据
    return{

    };
  },
  methods:{//储存方法

  },
  components:{//注册组建
    appHeader, //前面是ES6写法；ES5写法：appHeader: appHeader,
    appMain,
    appFooter,// appFooter: appFooter,
  },
}
</script>

<style lang="scss">
  /*sass语法，也可以如上，在js中载入@import './assets/css/css.css';*/

</style>
