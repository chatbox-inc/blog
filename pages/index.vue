<template>
  <div>

    <page-header v-bind="header"/>
    <!-- Main Content -->
    <div 
      v-if="posts != null" 
      class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <list-view 
            v-for="(post,index) in posts" 
            :key="index" 
            :post="post"/>
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
import {moduleName} from "~/store/posts"
import {mapState,mapActions} from "vuex"

export default {
  components: {
    ListView
  },
  watchQuery:true,
  async fetch({store}){
    try{
      await store.dispatch(`${moduleName}/LOAD_ARCHIVES`)
    }catch (e) {
      console.error(e.message)
    }
  },
  data(){
    return {
      header:{
        title: "chatbox.blog",
        description: "株式会社chatbox の web制作レポート"
      }
    }
  },
  computed:{
    ...mapState(moduleName,["posts"]),
  },
  mounted(){
    console.log(this.$store.state.posts)
  },
}
</script>

<style>


</style>

