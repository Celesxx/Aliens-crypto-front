import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState({
      storage: window.sessionStorage,
  })],
  state: 
  {
    accounts: [],
    indice: [4, 8, 15, 16, 23, 42],
    currentAddress: "",
    indiceFound: [],
    isExist: false
  },
  mutations: 
  {
    setAccounts(state, account)
    {
      state.accounts.push(account)
      state.currentAddress = account.address
    },

    setCurrentAccount(state, address) { state.currentAddress = address },
    setIndiceFound(state, indice) 
    { 
      state.indiceFound.push(indice)
      for(const account of state.accounts) if(account.address == state.currentAddress) account.indice.push(indice)
    },

    checkIfExist(state, address)
    {
      for(const account of state.accounts) if(account.address == address) state.isExist = true
    },

    updateAccounts(state, accounts)
    {
      state.accounts = accounts
    }
  },
  actions: 
  {
  },
  modules: {
  }
})
