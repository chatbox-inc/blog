<template>
  <div>
    <div class="post-preview">
      <router-link :to="pageUrl">
        <h2 class="post-title">{{ post.title }}</h2>
        <h3 class="post-subtitle">
          {{ post.summary }}
        </h3>
      </router-link>
      <p class="post-meta">Posted by
        <a >mikakane</a>
        on {{ post.created_at }}</p>
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
        required: true
      }
    },
    computed:{
      pageUrl(){
        return `${this.post.html_url}`
      }
    }
  }
</script>

<style scoped>
  .post-subtitle{
    font-size: 24px;
  }
</style>
