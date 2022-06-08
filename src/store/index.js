import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState({
      storage: window.sessionStorage,
  })],
  state: 
  {
    isExist: false,
    token: "",
    account: "",
    currentHint: []
  },
  mutations: 
  {

    setToken(state, token) { state.token = token},
    setAccount(state, account) { state.account = account},
    setHintFound(state, currentHint) { state.currentHint.push(currentHint) },
    setHint(state, currentHint) { state.currentHint = currentHint },

  },
  actions: 
  {
  },
  modules: {
  }
})
