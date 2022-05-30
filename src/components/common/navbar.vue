<template>
    <nav class="navbar">

      <div> <a class="navbar-logo" href="#">LOGO</a> </div>

      <div class="navbar-page">
          <ul class="navbar-page-nav">
              <li class="nav-item"><a class="navbar-page-nav-navigation" href="#home">page-1</a></li>
              <li class="nav-item"><a class="navbar-page-nav-navigation" href="#about">page-2</a></li>
          </ul>
      </div>

      <div class="navbar-button"> <button class="navbar-button-metamask" type="button">Metamask</button> </div>
  
  </nav>
</template>
<script>


export default 
{
  name: 'HomeComponent',
}
</script>


<style scoped>
    @import '../../assets/styles/global/web/navbar.css';
</style>

