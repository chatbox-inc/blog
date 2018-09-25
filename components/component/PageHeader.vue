<template>
  <!-- Page Header -->
  <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>{{title}}</h1>
            <span class="subheading">{{description}}</span>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
  export default {
    name: "Header",
    props:{
      title:{
        type: String,
        require: true
      },
      description:{
        type: String,
        require: true
      }
    }
  }
</script>

<style scoped>
</style>
