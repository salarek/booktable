<template>
  <div id="home" class="home">
    <header class="header-bar"></header>
    <div class="main-body">
      <div
        class="mozaik"
        @mouseover="mozaikOver = true"
        @mouseleave="mozaikOver = false"
      >
        <div v-for="mozaikImg in mozaikImages" :key="mozaikImg.id">
          <img
            class="mozaik-image"
            :style="
              mozaikOver
                ? { width: '90%', height: '90%' }
                : { width: '100%', height: '100%' }
            "
            :src="require(`${mozaikImg.src}`)"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "home",
  data() {
    return {
      mozaikImages: [],
      mozaikOver: false,
    };
  },
  mounted() {
    this.scrollActive();
  },
  created() {
    window.addEventListener("scroll", this.scrollActive);
    for (let i = 0; i < 10; i++) {
      this.mozaikImages.push({ id: i, src: "./images/breakafast.jpg" });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollActive);
  },

  methods: {
    scrollActive(event) {
      console.log("elo", event);
      //   for (let i = 0; i < 10; i++) {
      //     let doc = document.getElementById("mozaik-image" + i);
      //     if (doc) {
      //       doc.style.opacity = 0;
      //     }
      //   }
    },
    // shrinkMozaik() {
    //   let doc = document.getElementById();
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");

.home {
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
    width: 100%;
    .mozaik {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
      .mozaik-image {
        transition: 2s;
        width: 100%;
      }
    }
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
