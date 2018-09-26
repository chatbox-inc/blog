<template>
  <div v-if="post != null">
    <page-header v-bind="header"/>
    <!-- Main Content -->
    <div class="container" v-if="post != null">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto" v-html="post.body.content" />
      </div>
      <hr>
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto post-preview" >
          <p class="post-meta">Posted by
            <a >mikakane</a>
            on {{post.header.created_at}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListView from '~/components/component/Post/ListView.vue'
import {moduleName} from "~/store/posts"
import {mapState,mapActions} from "vuex"

export default {
  components: {
    ListView
  },
  async fetch({store}){
    const path = "/tips/others/gitbook_intro/index.json"
    await store.dispatch(`${moduleName}/LOAD_POST`,{path})
  },
  data(){
    return {
    }
  },
  computed:{
    ...mapState(moduleName,["post"]),
    header(){
      if(this.post == null){
        return {}
      }
      return {
        title: this.post.header.title,
        description: this.post.header.summary
      }
    }
  },
  pageInfo(){
    return {
      title: "",

    }
  },
  mounted(){
    console.log("hogemi")
    console.log(this.$store.state.posts)
  },
  head() {
    if(this.post == null){
      return {}
    }
    return {
      title: this.post.header.title,
      meta: [
        {hid: 'description', name: 'description', content: '登録費・年会費無料！「イチコン」は、税理士が顧問先の経営課題解決のため中小企業診断士と連携するサービスです。顧問先の相談内容「だけ」を投稿して中小企業診断士に相談！中小企業診断士が問題解決に挙手します。顧問先と共に歩み、共に成長する事務所を作りたい税理士、コンサルティングに関心のある税理士が集まるサイトです。'}
      ],
    };
  },
}
</script>

<style scoped>




</style>

