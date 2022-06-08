<template>

    <div class="navbar-button-content" v-if="!isLoggedIn">
        <button @click="connectWallet" v-if="isMetamaskSupported" class="navbar-button-metamask"> Metamask </button>
        <div class="navbar-button-metamask" v-else><p>Install metamask</p></div>
    </div>

    <div class="navbar-button-connected" v-else>
        {{getCurrentAccount}}
    </div>


</template>


<script>

import Web3 from 'web3'
import UserRequest from '/helpers/userRequest.helper.js'

export default 
{
  name: 'MetamaskButtonComponent',
  data() {
    return {
      isLoggedIn: false,
      address: "",
      isMetamaskSupported: false,
    }
  },

  methods: 
  {
    async connectWallet()
    {
      const userRequest = new UserRequest()
      if (window.ethereum) 
      {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
        
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()

        let requestResult = await userRequest.registerUser(accounts[0])
        if(requestResult.data.state == false)
        {
          requestResult = await userRequest.login(accounts[0])
          if(requestResult.data.auth == true) 
          {
            console.log("token : ", requestResult.data.token)
            let requestHint = await userRequest.getHint(requestResult.data.token)
            this.$store.commit('setToken', requestResult.data.token)
            this.$store.commit('setAccount', accounts[0])
            this.$store.commit('setHint', requestHint.data.hint)
            this.isLoggedIn = true

          }else { window.alert("An error append, try again please") }
        }else
        {
          this.$store.commit('setToken', requestResult.data.data)
          this.$store.commit('setAccount', accounts[0])
          this.isLoggedIn = true
        }
      }
      else if (window.web3) window.web3 = new Web3(window.web3.currentProvider)
      else window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  },
  computed: 
  {
      getCurrentAccount()
      {
        return this.$store.state.account
      }
  },
  created () 
  {
    if (window.ethereum) 
    {
        this.isMetamaskSupported = true
        if(this.$store.state.account != "") this.isLoggedIn = true
    }
  }
}

</script>


<style scoped>
    @import '../../assets/styles/global/web/navbar.css';
</style>