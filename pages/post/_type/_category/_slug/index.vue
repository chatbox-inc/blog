<template>
  <div v-if="post != null">
    <page-header v-bind="header"/>
    <!-- Main Content -->
    <div 
      v-if="post != null" 
      class="container">
      <div class="row">
        <div 
          class="col-lg-8 col-md-10 mx-auto" 
          v-html="post.body.content" />
      </div>
      <hr>
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto post-preview" >
          <p class="post-meta">Posted by
            <a >mikakane</a>
            on {{ post.header.created_at }}</p>
          <p class="text-center">
            <i class="fas fa-ellipsis-h fa-2x"/>
          </p>
          <p class="text-center">
            <router-link 
              class="btn btn-link btn-lg" 
              to="/">投稿一覧へ</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListView from '~/components/component/Post/ListView.vue'
import {moduleName} from "~/store/posts"
import {mapState,mapActions} from "vuex"
import createMeta from "~/service/meta";

export default {
  components: {
    ListView
  },
  async fetch({store,route}){
    const {type,category,slug} = route.params
    const path = `${type}/${category}/${slug}/index.json`
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
  mounted(){
  },
  head() {
    if(this.post == null){
      return {}
    }
    return {
      title: this.post.header.title,
      meta: [
        ...createMeta({
          title: this.post.header.title,
          description: this.post.header.summary
        })
      ]
    };
  },
}
</script>

<style scoped>




</style>

