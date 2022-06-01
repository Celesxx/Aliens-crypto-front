<template>

    <div class="navbar-button-content" v-if="!isLoggedIn">
        <button @click="connectWallet" v-if="isMetamaskSupported" class="navbar-button-metamask"> Metamask </button>
        <div class="test" v-else><p>Install metamask</p></div>
    </div>

    <div class="navbar-button-connected" v-else>
        {{this.address}}
    </div>


</template>


<script>

import Web3 from 'web3'

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
        if (window.ethereum) 
        {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
            this.isLoggedIn = true
        }
        else if (window.web3) window.web3 = new Web3(window.web3.currentProvider)
        else window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')

        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.address = accounts[0]
    }
  },
  computed: {
  },
  created () 
  {
    if (window.ethereum) 
    {
        this.isMetamaskSupported = true
    }
  }
}

</script>


<style scoped>
    @import '../../assets/styles/global/web/navbar.css';
</style>