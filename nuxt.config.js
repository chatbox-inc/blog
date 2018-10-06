require("dotenv").config()
import {loadArchives,loadPost} from "./service/blogContentReader"
import axios from "axios"
import createMeta from "./service/meta"

module.exports = {
  mode: "spa",
  env: {
    API_URL: process.env.FRONT_API_URL,
    NODE_ENV: process.env.FRONT_API_URL,
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: "%s | 株式会社 chatbox の Web制作レポート chatbox.note",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1, initial-scale=1' },
      ...createMeta({
        description: "Laravel や Vue.js / Nuxt.js など PHP/フロントエンドを中心にWeb開発や、技術顧問を行う株式会社chatboxのWeb制作レポート。",
        title: "トップ" ,
        host: "https://note.chatbox-inc.com",
        image: "/img/brand_image.jpg"
      }),
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
    async routes(args) {
      const posts = await loadArchives(axios.create({
        baseURL: process.env.FRONT_API_URL
      }))
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
    "~/plugins/axios.js",
  ],
  modules:[
    "@nuxtjs/pwa",
    "@nuxtjs/axios"
  ],
  axios:{
    baseURL: process.env.NUXT_ENV_FRONT_API_URL
  }

}

