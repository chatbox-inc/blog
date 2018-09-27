// 一部コードは以下より利用しています。
// https://github.com/potato4d/qiita-feed-gen/blob/master/src/core/render.js

const moment = require('moment')

const config = {
  hostname: "https://note.chatbox-inc.com"
}

const render = (posts) => {
  const articleData = posts.map((post) => (`
  <entry>
    <id>tag:qiita-feed-gen.potato4d.me,2017:WatchEvent/</id>
    <published>${post.created_at}</published>
    <updated>${post.created_at}</updated>
    <link type="text/html" rel="alternate" href="${post.html_url}"/>
    <title type="html">${post.title}</title>
    <author>
      <name>mikakane</name>
      <uri>${post.html_url}</uri>
    </author>
    <media:thumbnail height="30" width="30" url="${config.hostname}/img/brand_image.jpg"/>
    <content type="text">${post.summary}</content>
  </entry>`)).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:lang="en-US">
  <id>tag:qiita-feed-gen.potato4d.me,2017:/.private</id>
  <link type="text/html" rel="alternate" href="${config.hostname}"/>
  <title>chatbox.blog</title>
  <updated>${moment().format()}</updated>${articleData}
</feed>`
}

module.exports =  (posts)=>{
  return render(posts)
}
