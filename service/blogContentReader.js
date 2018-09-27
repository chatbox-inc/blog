const axios = require('axios')


// axios Client
const createAxios = () => {
  return new axios.create({
    baseURL: process.env.FRONT_API_URL
  })
}

const modules = {}

modules.loadArchives = async () => {
  const api = createAxios()
  const {data} = await api.get("/api/summary/index.json")
  return data
}

modules.loadPost = async (path) => {
  const api = createAxios()
  const {data} = await api.get("/api/"+path)
  return data
}

module.exports = modules

