<template>
<div>
  <div class="clearFix top">
    <h1 class="logo"><a href="##"><img src="@/assets/img/logo.jpg" width="231" height="84" alt="xx公司" /></a></h1>
      <div class="web_map"><a href="##">网站地图</a>|<a href="javascript:void(0)">收藏网站</a></div>
      <ul class="nav">
        <li v-for="(item,index) in navData" :key="index"><router-link :to="item.to">{{item.name}}</router-link></li>
<!--         <li ><a href="##">网站首页</a></li>
          <li><a href="##">公司简介</a></li>
          <li><a href="##">产品介绍</a></li>
          <li><a href="##">行业资讯</a></li>
          <li><a href="##">联系我们</a></li> -->
      </ul>
  </div>

  <div class="clearFix flash">
      <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="1004" height="317">
        <param name="movie" value="@/assets/img/swf.swf">
        <param name="quality" value="high">
        <embed src="images/swf.swf" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="1004" height="317" ></embed><!--embed支持FF、chrome、safari-->
      </object>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      navData:[
        {to:'/',name:'网站首页'},
        {to:'/contact',name:'公司简介'},
        {to:'/product/list',name:'产品列表'},
        {to:'/news/list',name:'行业资讯'},
        {to:'/contact',name:'联系我们'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
