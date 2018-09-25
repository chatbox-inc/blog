module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
    middleware: 'index'
  },
  plugins: [
    "~/plugins/index.js",
  ],
}

