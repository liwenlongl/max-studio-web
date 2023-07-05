import { createStore } from 'vuex'

export default createStore({
  state: {
    token: '',
    tokenStartTime: null,
    userInfo: {}
  },
  getters: {
    getToken: (state) => { return state.token },
    getUserInfo: (state) => { return state.userInfo }
  },
  mutations: {
    set_token (state, token) {
      localStorage.setItem('token', token)
      state.token = token
    },
    set_tokenStartTime (state, tokenStartTime) {
      localStorage.setItem('tokenStartTime', tokenStartTime)
      state.tokenStartTime = tokenStartTime
    },
    set_userInfo (state, userInfo) {
      localStorage.setItem('userInfo', userInfo)
      state.useInfo = userInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
