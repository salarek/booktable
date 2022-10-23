<template>
  <div id="app">
    <navigation></navigation>

    <router-view />
  </div>
</template>
<script lang="ts">
import Navigation from "./components/Navigation/Navigation.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    Navigation,
  },
});
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 400;
}
#app {
  min-height: 100vh;
  position: relative;
  background-color: white;
}

.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
