<template>
  <div id="landing" class="landing">
    <header class="header-bar"></header>
    <div class="main-body"></div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "landing",
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");

.landing {
  font-family: "Cairo", sans-serif;
  position: absolute;
  background-color: $primary;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header-bar {
    background-color: $third;
    width: 100%;
    min-height: 8vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: white;
    // justify-content: center;
    border-width: 1px;
    border-color: white;
    border-bottom-style: solid;
  }
  .main-body {
    display: flex;
    flex-direction: row;
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
