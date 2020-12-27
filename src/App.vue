<template>
  <div id="app" style="font-">
    <tawk-header></tawk-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    "tawk-header": Header,
  },
};
</script>


<style lang="scss">
@import "scss/main.scss";
@import "scss/_variables.scss";
* {
  font-family: $font-family;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>