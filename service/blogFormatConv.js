const fs =require("fs-extra")
const path =require("path")
const moment = require("moment")
const generateSiteMap = require("./blogFormatConv/sitemap")
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

//
const convertFilemap2Briefs = (args) => {
  const {
    title, created_at, base,dir, ext,slug,summary
  } = args
  const _created_at = created_at && created_at.substr(0,10)
  const category = '/' + dir.substr(8)
  const html_url = '/post/' + dir.substr(12) + '/' + slug
  return createPostHeader({
    title,
    category,
    slug,
    html_url,
    summary,
    created_at: _created_at,
  })
}

const convertFile2Post = (args) => {
  const {
    bodyHtml
  } = args

  return createPostBody({
    content: bodyHtml
  })
}

// FS 周り
const convertBlogSumary = (path,handleEachContent)=>{
  const {fileMap} = JSON.parse(fs.readFileSync( path, 'utf8'));
  const rtn = [];
  for(let fileKey in fileMap){
    if(fileMap[fileKey].is_open){
      const header = convertFilemap2Briefs(fileMap[fileKey])
      const body = convertFile2Post(JSON.parse(fs.readFileSync( fileKey, 'utf8')))
      rtn.push(header)
      handleEachContent({header,body})
    }
  }
  rtn.sort((a,b)=>{
    const aMom = moment(a.created_at)
    const bMom = moment(b.created_at)
    console.log(aMom.valueOf() + " / " + bMom.valueOf())
    if(aMom.valueOf() > bMom.valueOf()){
      return -1
    }
    if(aMom.valueOf() < bMom.valueOf()){
      return 1
    }
    return 0
  })
  return rtn
}



const main = () => {
  // ブログサマリーフォーマットの修正
  // ブログ個別記事の修正
  const summaryUri = path.resolve("static/_api/summary.json")

  const summary = convertBlogSumary(summaryUri,({header,body}) => {
    const contentDir = path.resolve('static' , './'+header.category , header.slug)
    console.log(contentDir)
    fs.mkdirsSync(contentDir)
    fs.writeFileSync(path.resolve(contentDir,"index.json"),JSON.stringify({
      header,body
    }))
  })

  fs.writeFileSync(path.resolve("static/feed.rss"),generateSiteMap(summary))

  fs.mkdirSync('static/api/summary')
  fs.writeFileSync(path.resolve("static/api/summary/index.json"),JSON.stringify(summary))
}

main()
