const sitemap = require('sitemap')

const config = {
  hostname: "https://note.chatbox-inc.com"
}


module.exports =  (posts)=>{
  const options = {
    hostname: config.hostname,
    urls: []
  }

  for ( let post of posts ) {
    options.urls.push({
      url: config.hostname + post.html_url,
      lastmodISO: `${post.created_at}`,
      changefreq: 'weekly',
    })
  }
  return sitemap.createSitemap(options).toString()
}
