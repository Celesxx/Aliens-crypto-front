<template>
  <div>
    <HomeComponent/>
    <AboutComponent/>
    <RoadmapComponent/>
    <ScrollBarComponent/>
    <NavbarComponent/>
  </div>
</template>

<script>
import AboutComponent from '@/components/about.vue'
import HomeComponent from '@/components/home.vue'
import RoadmapComponent from '@/components/roadmap.vue'
import NavbarComponent from '@/components/common/navbar.vue'
import ScrollBarComponent from '@/components/common/scrollbar.vue'

export default {
  name: 'Home',

  components: {
    AboutComponent,
    HomeComponent,
    RoadmapComponent,
    NavbarComponent,
    ScrollBarComponent
  },
  
}
</script>


<style scoped>
    @import '../assets/styles/global/web/app.css';
    @import '../assets/styles/global/mobile/app.css';
</style>
