import axios from 'axios'


// axios Client
const createAxios = () => {
  return new axios.create({
    baseURL: process.env.FRONT_API_URL
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

