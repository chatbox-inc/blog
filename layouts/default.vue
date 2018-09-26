<template>
  <div>
    <page-navi/>
    <nuxt/>
    <!--<hr>-->
    <page-footer/>
  </div>
</template>

<script>
  import PageFooter from "~/components/layout/Footer"
  import PageNavi from "~/components/layout/Navigation"

  export default {
    components: {
      PageFooter,
      PageNavi
    }

  }


</script>


