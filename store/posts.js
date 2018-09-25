export const moduleName = "posts"


export const state = () => ({
  posts: []
})

export const mutations = {
  SET_POSTS (state,posts) {
    state.posts = posts
  }
}


export const actions = {
  async LOAD_ARCHIVES({commit},){

  },
  nuxtServerInit ({ commit }, { req }) {
    commit("SET_POSTS","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur assumenda deserunt eius enim ipsum laborum, maiores minima necessitatibus nisi nulla officiis omnis pariatur reprehenderit sit soluta tempora totam?")
  }
}
