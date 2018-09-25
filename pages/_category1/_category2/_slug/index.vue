<template>
  <div>
    <page-header v-bind="header"/>
    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListView from '~/components/component/Post/ListView.vue'

export default {
  components: {
    ListView
  },
  asyncData(){
    if(process.server){
      const {loadPost} = require("~/service/blogContentReader");
      const post = loadPost()
      return {
        post ,
        header:{
          title: post.title,
          description: post.summary
        }
      }
    }else{

    }
  },
  data(){
    return {
      posts : [],
    }
  },
  pageInfo(){
    return {
      title: "",

    }
  },
  mounted(){
    console.log(this.$store.state.posts)
  },
  head() {
    return {
      title: "",
      meta: [
        {hid: 'description', name: 'description', content: '登録費・年会費無料！「イチコン」は、税理士が顧問先の経営課題解決のため中小企業診断士と連携するサービスです。顧問先の相談内容「だけ」を投稿して中小企業診断士に相談！中小企業診断士が問題解決に挙手します。顧問先と共に歩み、共に成長する事務所を作りたい税理士、コンサルティングに関心のある税理士が集まるサイトです。'}
      ],
    };
  },
}
</script>

<style>


</style>

