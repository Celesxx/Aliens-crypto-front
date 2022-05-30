<template>

  <section class="home" id="home">

    <div class= "home-content">

      <div class= "home-content-aliens-words" id="words-content-1"><p class="p-aliens" id="words-1">Bonjour humain</p></div>
      <div class= "home-content-aliens-words words-margin-right" id="words-content-2"><p class="p-aliens" id="words-2">Paix humain</p></div>
      <div class= "home-content-aliens-words" id="words-content-1 words-margin-left"><p class="p-aliens" id="words-3">Aidez nous</p></div>
      <div class= "home-content-aliens-words" id="words-content-2"><p class="p-aliens" id="words-4">Sauvez nous</p></div>
      
    </div>
  </section>

</template>

<script>
  export default 
  {
    name: 'HomeComponent'
  }
</script>

<style scoped>
    @import '../assets/styles/global/web/home.css';
    @import '../assets/styles/global/mobile/home.css';
</style>
