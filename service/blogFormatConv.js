const fs =require("fs-extra")
const path =require("path")
const moment = require("moment")
const generateSiteMap = require("./blogFormatConv/sitemap")
const generateRss = require("./blogFormatConv/rss")
// 簡易投稿型
const createPostHeader = (args) => {
  const {
    title,
    created_at,
    category,
    slug,
    html_url,
    summary
  } = args
  return {
    title,
    category,
    slug,
    html_url,
    summary,
    created_at,
  }
}

// 投稿本文型
const createPostBody = ({ content }) => {
  return { content }
}

const convertFile2Post = (metaContents, fileContents) => {
  const category =  fileContents.dir.substr(5)
  return {
    header: createPostHeader({
      title: fileContents.title,
      category: '/' + category,
      slug: fileContents.slug,
      html_url: '/post/' + category + '/' + fileContents.slug,
      summary: fileContents.summary,
      created_at: fileContents.created_at && fileContents.created_at.substr(0,10),
    }),
    body: createPostBody({
      content: fileContents.bodyHtml
    })
  }
}

// FS 周り
const convertBlogSumary = (summarypath,handleEachContent)=>{
  const {posts} = JSON.parse(fs.readFileSync( summarypath, 'utf8'));
  const rtn = [];
  for(let key in posts){
    const metaContents = { key, ... posts[key]}

    const contentPath = path.resolve("_api/",metaContents.dir,metaContents.path).replace(".md",".json");
    const fileContents = JSON.parse(fs.readFileSync( contentPath, 'utf8'))

    if(validateFile(metaContents, fileContents)){
      const {header,body} = convertFile2Post(metaContents,fileContents)
      rtn.push(header)
      handleEachContent({header,body})
    }
  }
  return sortBlogSummary(rtn)
}

const sortBlogSummary = (posts)=> {
  posts.sort((a,b)=>{
    const aMom = moment(a.created_at)
    const bMom = moment(b.created_at)
    if(aMom.valueOf() > bMom.valueOf()){
      return -1
    }
    if(aMom.valueOf() < bMom.valueOf()){
      return 1
    }
    return 0
  })
  return posts
}

const validateFile = (metaContents, fileContents)=>{
  if(!fileContents.is_open){
    console.error(`fail to load ${metaContents.path} is not 'is_open as true'`)
    return false
  }
  return true;
}



const main = () => {
  // ブログサマリーフォーマットの修正
  // ブログ個別記事の修正
  const summaryUri = path.resolve("_api/index.json")

  const summary = convertBlogSumary(summaryUri,({header,body}) => {
    const contentDir = path.resolve('static' , './api/'+header.category , header.slug)
    fs.mkdirsSync(contentDir)
    fs.writeFileSync(path.resolve(contentDir,"index.json"),JSON.stringify({
      header,body
    }))
  })

  fs.writeFileSync(path.resolve("static/sitemap.xml"),generateSiteMap(summary))
  fs.writeFileSync(path.resolve("static/feed.xml"),generateRss(summary))

  fs.mkdirSync('static/api/summary')
  fs.writeFileSync(path.resolve("static/api/summary/index.json"),JSON.stringify(summary))
}

main()
