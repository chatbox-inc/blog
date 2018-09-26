import axios from 'axios'


// axios Client
const createAxios = () => {
  return new axios.create({
    baseURL: "http://localhost:3000"
  })
}


// 簡易投稿型
const createPostHeader = (args) => {
  const {
    title,
    created_at,
    category,
    slug,
    url,
    summary
  } = args
  return {
    title,
    created_at,
    category,
    slug,
    url,
    summary
  }
}

// 投稿本文型
const createPostBody = ({ content }) => {
  return { content }
}

//
const convertFilemap2Briefs = (args) => {
  const {
    title, created_at, base,dir, ext
  } = args

  const slug = base.replace(new RegExp(`${ext}$`),"")

  return createPostHeader({
    title,
    created_at: created_at && created_at.substr(0,10),
    category: dir.substr(7),
    slug,
  })
}

const convertFile2Post = (args) => {
  const {
    title, created_at, base,dir, ext
  } = args

  return createPostBrief({
    title,
    created_at: created_at.substr(0,10),
    category: dir.substr(10),
    slug: base.replace(new RegExp(`${ext}$`),"")
  })
}



export const loadArchives = async () => {
  const api = createAxios()
  const {data} = await api.get("/api/summary/index.json")
  return data
}

export const loadPost = async (path) => {
  const api = createAxios()
  const {data} = await api.get("/api/"+path)
  return data
}

