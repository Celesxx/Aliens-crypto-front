<template>
    <nav class="scroll">
        <div v-if="getHintFound >= 1" class="scroll-content">
            <ul  class="scroll-content-nav">
                <li class="home scroll-content-nav-page scroll-active" id="home"><a class="scroll-content-nav-page-link" href="#home"></a></li>
                <li v-if="getHintFound >= 1" class="indice1 scroll-content-nav-page" id="indice1"><a class="scroll-content-nav-page-link" href="#indice1"></a></li>
                <li v-if="getHintFound >= 2" class="roadmap scroll-content-nav-page" id="roadmap"><a class="scroll-content-nav-page-link" href="#roadmap"></a></li>
                <li v-if="getHintFound >= 3" class="indice3 scroll-content-nav-page" id="indice3"><a class="scroll-content-nav-page-link" href="#indice3"></a></li>
                <li v-if="getHintFound >= 4" class="indice4 scroll-content-nav-page" id="indice4"><a class="scroll-content-nav-page-link" href="#indice4"></a></li>
                <li v-if="getHintFound >= 5" class="indice5 scroll-content-nav-page" id="indice5"><a class="scroll-content-nav-page-link" href="#indice5"></a></li>
            </ul>
        </div>
    </nav>
</template>
<script>


export default 
{
  name: 'ScrollBarComponent',

  computed: 
  {
    getHintFound() { return this.$store.state.currentHint.length},
  },
}

</script>


<style scoped>
    @import '../../assets/styles/global/web/scrollbar.css';
</style>

