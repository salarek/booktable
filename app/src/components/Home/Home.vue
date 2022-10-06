<template>
  <div id="home" class="home">
    <header class="header-bar"><navigation></navigation></header>
    <img class="header-image" :src="require('./images/tables2.jpg')" alt="" />
  </div>
</template>

<script>
import Navigation from "../Navigation/Navigation.vue";
export default {
  components: { Navigation },
  name: "home",
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/fonts";
@import url("http://fonts.googleapis.com/css?family=Berkshire+Swash&subset=latin,latin-ext");

.home {
  position: absolute;
  background-color: $primary;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  .header-bar {
    position: fixed;
    z-index: 2;
    font-family: "Berkshire Swash", sans-serif;
    background-color: transparent;
    min-height: 8vh;
    width: 100%;
    font-size: 4rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: white;
    justify-content: center;
    top: 0px;
    left: 0px;
  }
  .header-bar:hover {
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .header-image {
    position: absolute;
    width: 2000px;
  }
}

.btn-primary {
  background-color: $third;
  border: none;
}
.btn-primary:hover {
  background-color: $third_black;
}
.btn-primary:focus {
  background-color: $third_black;
}
</style>
