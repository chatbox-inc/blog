<template>
  <div>
    <div>
      <page-header v-bind="header"/>
      <!-- Main Content -->
      <div class="container">
        <div class="row">
          <div class="col">
            <p>残念ながらお探しのページは見つかりませんでした。</p>

            <p>
              紛失した記事に関するお問い合わせや、ブログコンテンツの追加依頼等、サイトに関するお困り事は、
              <a href="https://chatbox-inc.com/contact/" target="_blank" rel="noopener">お問い合わせ</a>
              までお寄せください。
            </p>

            <p class="text-center">
              <br>
              <br>
              <a href="/">投稿一覧へ</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PageFooter from "~/components/layout/Footer"
  import PageNavi from "~/components/layout/Navigation"

  export default {
    props: ['error'],
    data(){
      return {
        header:{
          title: "404 not found",
          description: "お探しのページは見つかりませんでした"
        }
      }
    },
    mounted(){
      console.error(this.error)
    }

  }


</script>


