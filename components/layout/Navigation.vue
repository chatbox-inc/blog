<template>
  <!-- Navigation -->
  <nav 
    id="mainNav" 
    class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <a 
        class="navbar-brand" 
        href="/">chatbox.blog</a>
      <button 
        class="navbar-toggler navbar-toggler-right" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarResponsive" 
        aria-controls="navbarResponsive" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"/>
      </button>
      <div 
        id="navbarResponsive" 
        class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a 
              class="nav-link" 
              href="https://chatbox-inc.com/" 
              target="_blank" 
              rel="noopener">chatbox</a>
          </li>
          <!--<li class="nav-item">-->
          <!--<a class="nav-link" href="about.html">About</a>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
          <!--<a class="nav-link" href="post.html">Sample Post</a>-->
          <!--</li>-->
          <li class="nav-item">
            <a 
              class="nav-link" 
              href="https://chatbox-inc.com/contact/" 
              target="_blank" 
              rel="noopener">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

</style>
