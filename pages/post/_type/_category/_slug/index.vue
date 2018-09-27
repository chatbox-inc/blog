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
          <p class="text-center">
            <i class="fas fa-ellipsis-h fa-2x"></i>
          </p>
          <p class="text-center">
            <router-link class="btn btn-link btn-lg" to="/">投稿一覧へ</router-link>
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
        {hid: 'description', name: 'description', content: ''}
      ],
    };
  },
}
</script>

<style scoped>




</style>

