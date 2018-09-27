require("dotenv").config()
const {loadArchives,loadPost} = require("./service/blogContentReader")


const meta = {
  description: "株式会社chatboxは大阪堺筋本町の小さなWeb制作会社です。Web制作や技術顧問、イベント運営など、最新のWeb製作技術を活かした様々な活動を行っています。",
  title: "株式会社 chatboxはWebのこれからを語り合う会社です。| 株式会社 chatbox(チャットボックス)"
}

module.exports = {
  env: {
    API_URL: process.env.FRONT_API_URL,
    NODE_ENV: process.env.FRONT_API_URL,
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: meta.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1, initial-scale=1' },
      { name: 'description', content: meta.description },
      { name: 'keyword', content: "大阪,Web制作,技術顧問,イベント,PHP,フロントエンド,株式会社chatbox,チャットボックス" },
      { property: 'og:title', content: meta.title },
      { property: 'og:image', content: 'https://chatbox-inc.com/images/ogp.jpg' },
      { property: 'og:url', content: 'https://chatbox-inc.com/' },
      { property: 'og:description', content: meta.description},
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@chatbox_inc' },
      { name: 'twitter:creator', content: '@chatbox_inc' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: 'https://chatbox-inc.com/images/ogp.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/vendor/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/vendor/fontawesome-free/css/all.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/clean-blog.min.css' },
    ],
    script: [
      { src: '/vendor/jquery/jquery.min.js' },
      { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js' },
      { src: '/js/clean-blog.min.js' },
    ]
  },
  css: [
    {src: 'highlight.js/styles/solarized-dark.css',lang:'css'},
  ],
  generate: {
    fallback: true,
    async routes() {
      const posts = await loadArchives()
      return posts.map((post)=>{
        return post.html_url
      })
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    // middleware: 'index'
  },
  plugins: [
    "~/plugins/index.js",
  ],
  modules:[
    "@nuxtjs/pwa"
  ]
}

