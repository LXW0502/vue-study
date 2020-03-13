<template>
<div class="list_right">
    <div class="list_tit"><span><i>◆</i></span>您现在所在的位置：<a href="##">首页</a>&gt;联系我们</div>
    <div class="contact">
        <h2>联系我们</h2>
        <span class="contact_map"><img src="@/assets/img/map.jpg" width="532" height="245" alt="地址" /></span>
        <ul class="contact_main">
            <li>联系地址：{{contentData.address}}</li>
            <li>办公电话：{{contentData.officeTel}}</li>
            <li>联系电话：{{contentData.contactTel}}</li>
            <li>邮政编码：{{contentData.postCode}}</li>
            <li>电子邮件：{{contentData.email}}</li>
        </ul>
    </div>
</div>
</template>

<script>
import {getContact} from '@/api/contact'//加大括号，因为它是export输出的，而非export default
export default {
  name: '',
  data () {
    return {
      contentData:{},//内容的数据对象，存联系方式等内容
      
    };
  },

  created(){
    this.getContact();
  },
  methods:{
    getContact(){
      var _this = this;
        getContact({
          params:{
          a:1
         },
        }).then(function(res){
            console.log(res);
            _this.contentData = res.data;
            // console.log(_this.contentData,111);//修改之后要重启node
        }).catch(function(err){
            console.log(err);
        });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
