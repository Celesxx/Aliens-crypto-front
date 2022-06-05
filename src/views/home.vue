<template>
  <div>
    <HomeComponent/>
    <Indice1Component :position='current'/>
    <RoadmapComponent :position='current'/>
    <Indice3Component :position='current'/>
    <Indice4Component :position='current'/>
    <Indice5Component :position='current'/>
    <ScrollBarComponent/>
    <NavbarComponent/>
  </div>
</template>

<script>
import HomeComponent from '@/components/home.vue'
import Indice1Component from '@/components/indice.vue'
import RoadmapComponent from '@/components/roadmap.vue'
import Indice3Component from '@/components/indice3.vue'
import Indice4Component from '@/components/indice4.vue'
import Indice5Component from '@/components/indice5.vue'
import NavbarComponent from '@/components/common/navbar.vue'
import ScrollBarComponent from '@/components/common/scrollbar.vue'

export default {
  name: 'Home',

  components: {
    Indice1Component,
    HomeComponent,
    RoadmapComponent,
    NavbarComponent,
    ScrollBarComponent,
    Indice3Component,
    Indice4Component,
    Indice5Component,
  },

  data() {
    return {
      current: ""
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },



  methods: 
  {
    handleScroll (event) 
    {
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll("nav .scroll-content ul li");

      sections.forEach((section) =>
      {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 40) {
           this.current = section.getAttribute("id"); 
          }
      });

      navLi.forEach((li) => 
      {
        li.classList.remove("scroll-active");
        if (li.classList.contains(this.current)) 
        { 
          let allNavActive =  document.querySelectorAll("nav .scroll-content ul li.scroll-active")
          li.classList.add("scroll-active"); 
        }
      })
    }
  }
}

</script>


<style scoped>
    @import '../assets/styles/global/web/app.css';
    @import '../assets/styles/global/mobile/app.css';
</style>
