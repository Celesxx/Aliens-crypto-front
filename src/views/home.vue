<template>
  <div>
    <NavbarComponent/>
    <HomeComponent/>
    <AboutComponent/>
    <BuyComponent/>
  </div>
</template>

<script>
import HomeComponent from '@/components/common/home.vue'
import NavbarComponent from '@/components/common/navbar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export default {
  name: 'Home',

  components: {
    HomeComponent,
    NavbarComponent
  },
  
}
</script>


<style scoped>
    @import '../assets/styles/global/web/app.css';
    @import '../assets/styles/global/mobile/app.css';
</style>
