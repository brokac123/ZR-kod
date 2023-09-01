<template>
  <div>
    <the-header v-if="showHeader"></the-header>
    <router-view></router-view>
    <the-footer v-if="showFooter"></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';
import TheFooter from './components/UI/TheFooter.vue';

export default{
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    
    showHeader() {
      return this.$route.meta.showHeaderFooter !== false;
    },
    showFooter() {
      return this.$route.meta.showHeaderFooter !== false;
    }
  }
}
</script>

<style>
*,*::before,*::after{
margin: 0;
padding: 0;
box-sizing: border-box;
}
html{
  width: 100vw;
  overflow-x:hidden ;
}
body{
  background: #fff;
  font: 12px/17px "Sans Pro";
  color:#333;
}
a{
  all:unset;
  cursor: pointer;
}
@font-face {
    font-family:"Sans Pro";
    src: url("../Source_Sans_Pro/SourceSansPro-Regular.ttf");
}
</style>
