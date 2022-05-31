<template>
    <nav class="scroll">

        <div class="scroll-content">
            <ul class="scroll-content-nav">
                <li class="scroll-content-nav-page scroll-active" id="home"><a class="scroll-content-nav-page-link" href="#home"></a></li>
                <li class="scroll-content-nav-page" id="about"><a class="scroll-content-nav-page-link" href="#about"></a></li>
                <li class="scroll-content-nav-page" id="roadmap"><a class="scroll-content-nav-page-link" href="#roadmap"></a></li>
            </ul>
        </div>
    </nav>
</template>
<script>


export default 
{
  name: 'ScrollBarComponent',
}

</script>


<style scoped>
    @import '../../assets/styles/global/web/scrollbar.css';
</style>

