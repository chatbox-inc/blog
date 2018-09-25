<template>
  <div>
    <div class="post-preview">
      <router-link :to="pageUrl">
        <h2 class="post-title">{{post.title}}</h2>
        <h3 class="post-subtitle">
          Problems look mighty small from 150 miles up
        </h3>
      </router-link>
      <p class="post-meta">Posted by
        <a >mikakane</a>
        on {{post.created_at}}</p>
    </div>
    <hr>
  </div>

</template>

<script>
  export default {
    name: "ListView",
    props:{
      post:{
        type: Object,
        require: true
      }
    },
    computed:{
      pageUrl(){
        return `${this.post.category}/${this.post.slug}`
      }
    }
  }
</script>

<style scoped>

</style>
