import {loadArchives,loadPost} from "../service/blogContentReader";

export const moduleName = "posts"


export const state = () => ({
  posts: null,
  post: null
})

export const mutations = {
  SET_POSTS (state,posts) {
    state.posts = posts
  },
  SET_POST (state,post) {
    state.post = post
  }
}

export const actions = {
  async LOAD_ARCHIVES({commit},){
    const posts = await loadArchives()
    commit("SET_POSTS",posts)
  },
  async LOAD_POST({commit},{path}){
    const post = await loadPost(path)
    commit("SET_POST",post)
  },
}
