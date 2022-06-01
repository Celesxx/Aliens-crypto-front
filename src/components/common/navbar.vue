<template>
    <nav class="navbar">

      <div> <a class="navbar-logo" href="#">LOGO</a> </div>

      <div class="navbar-page">
          <ul class="navbar-page-nav">
              <li class="nav-item"><a class="navbar-page-nav-navigation" href="#home">page-1</a></li>
              <li class="nav-item"><a class="navbar-page-nav-navigation" href="#about">page-2</a></li>
          </ul>
      </div>

      <div class="navbar-button"><MetamaskButtonComponent/> </div>
  
  </nav>
</template>

<script>

import MetamaskButtonComponent from "@/components/common/metamaskButton.vue"

export default 
{
  name: 'HomeComponent',

  components: {
    MetamaskButtonComponent,
  },
}

</script>


<style scoped>
    @import '../../assets/styles/global/web/navbar.css';
</style>

