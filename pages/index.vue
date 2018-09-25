<template>
  <div>

    <page-header v-bind="header"/>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <list-view v-for="(post,index) in posts" :key="index" :post="post"/>
          <!-- Pager -->
          <!--<div class="clearfix">-->
            <!--<a class="btn btn-primary float-left" href="#">&larr; 前へ</a>-->
            <!--<a class="btn btn-primary float-right" href="#">次へ &rarr;</a>-->
          <!--</div>-->
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
    const {loadArchives} = require("../service/blogContentReader");
    return {
      posts: loadArchives(),
      header:{
        title: "chatbox.blog",
        description: "株式会社chatbox の web制作レポート"
      }
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

