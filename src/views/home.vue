<template>
  <div>
    <HomeComponent/>
    <AboutComponent :position='current'/>
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
        if (pageYOffset >= sectionTop) {
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
      });
    }
  }
}

</script>


<style scoped>
    @import '../assets/styles/global/web/app.css';
    @import '../assets/styles/global/mobile/app.css';
</style>
