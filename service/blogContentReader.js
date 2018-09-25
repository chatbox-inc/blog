const createPostBrief = ({
  title, created_at, category, slug, summary
}) => {
  return {
    title, created_at, category, slug,summary
  }
}

const createPostDetail = (arg) => {
  const brief = createPostBrief(arg)
  const { content } = arg
  return { ...brief, content}
}

const convertFilemap2Briefs = (args) => {
  const {
    title, created_at, base,dir, ext
  } = args

  return createPostBrief({
    title,
    created_at: created_at.substr(0,10),
    category: dir.substr(4),
    slug: base.replace(new RegExp(`${ext}$`),"")
  })
}

const convertFile2Post = (args) => {
  const {
    title, created_at, base,dir, ext
  } = args

  return createPostBrief({
    title,
    created_at: created_at.substr(0,10),
    category: dir.substr(4),
    slug: base.replace(new RegExp(`${ext}$`),"")
  })
}



export const loadArchives = (name) => {
  if(process.server){
    const fs =require("fs")
    const path = require("path").resolve("static/_api/reports.json")
    const {fileMap} = JSON.parse(fs.readFileSync( path, 'utf8'));
    const rtn = [];
    for(let fileKey in fileMap){
      rtn.push(convertFilemap2Briefs(fileMap[fileKey]))
    }
    return rtn
  }else{

  }
}

export const loadPost = (key) => {
  if(process.server){
    const fs =require("fs")
    const path = require("path").resolve("_api/report/2018/36.json")
    const content = JSON.parse(fs.readFileSync( path, 'utf8'));
    return convertFile2Post(content)
  }
}

