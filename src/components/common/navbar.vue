<template>
    <nav class="navbar navbar-light navbar-expand-md fixed-top d-flex d-sm-flex d-md-flex justify-content-between navbar-global">
      <div class="container-fluid"><span class="nav-span"></span><a class="navbar-brand d-flex navbar-logo" href="#">LOGO</a><button data-bs-toggle="collapse" class="navbar-toggler navbar-toggle" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon" id="navbar-icon"></span></button>
          <div class="collapse navbar-collapse" id="navcol-1">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item"><a class="nav-link active navbar-navigation" data-bss-hover-animate="pulse" href="#home">page-1</a></li>
                  <li class="nav-item"><a class="nav-link navbar-navigation" data-bss-hover-animate="pulse" href="#about">page-2</a></li>
                  <li class="nav-item"><button class="btn btn-primary button-metamask" type="button">Metamask</button></li>
              </ul>
          </div>
      </div>
  </nav>
</template>
<script>

import {showAt, hideAt} from 'vue-breakpoints'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default 
{
  name: 'HomeComponent',
  components: { hideAt, showAt },
  data: () => ({
    oppenned: false,
    mobileView: false
  }),
  methods: {

    handleView() {
        this.mobileView = window.innerWidth <= 990;
    },

    mobileNav(mobileView)
    {
      if (mobileView) 
      {
        [].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
          elem.classList.remove('animated');
          elem.removeAttribute('data-bss-hover-animate');
          elem.removeAttribute('data-aos');
        });

        document.addEventListener('DOMContentLoaded', function() 
        {
          AOS.init();

          var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
          var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
            hoverAnimationEl.addEventListener('mouseenter', function(e){ e.target.classList.add('animated', e.target.dataset.bssHoverAnimate) });
            hoverAnimationEl.addEventListener('mouseleave', function(e){ e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate) });
          });
        }, false);
      }
    }
  },

  created() {
    this.handleView();
    this.mobileNav(this.mobileView);
    // window.addEventListener('resize', this.handleView);
  }

}
</script>


<style scoped>
    @import '../../assets/styles/global/web/navbar.css';
    @import '../../assets/styles/global/mobile/navbar.css';
</style>

