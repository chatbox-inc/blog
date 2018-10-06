import axios from 'axios'


// axios Client
const createAxios = (options) => {
  return new axios.create(options)
}

export const loadArchives = async ($axios) => {
  const {data} = await $axios.get("/api/summary/index.json")
  return data
}

export const loadPost = async ($axios,path) => {
  const {data} = await $axios.get("/api/"+path)
  return data
}
