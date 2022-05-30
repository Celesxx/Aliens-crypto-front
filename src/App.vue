<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style>

@font-face {
  font-family: "Yuji Syuku";
  src: local("Yuji Syuku"),
   url(./assets/font/YujiSyuku-Regular.ttf) format("truetype");

   font-family: "alien";
  src: local("alien"),
   url(./assets/font/Alien-Regular.ttf) format("truetype");
}

body 
{
  margin: 0px;
}

html
{
  scroll-behavior: smooth;
}
</style>
