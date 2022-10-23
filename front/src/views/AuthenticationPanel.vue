<template>
  <div class="authentication-panel">
    <div class="background-image"></div>
    <main>
      <login></login>
      <aside>
        <img
          :src="require('../assets/AuthenticationPanelImages/bcg.jpg')"
          alt=""
        />
        <div class="gif">
          <img
            :src="require('../assets/AuthenticationPanelImages/cat.gif')"
            alt=""
          />
        </div>
      </aside>
    </main>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Login from "../components/Login/Login.vue";
export default Vue.extend({
  components: { Login },
});
</script>
<style lang="scss" scoped>
@import url("http://fonts.googleapis.com/css?family=Bellefair&subset=latin,latin-ext");
.authentication-panel {
  font-family: "Bellefair", sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .background-image {
    left: 50%;
    right: 0;
    width: 2000px;
    margin: auto;
    position: fixed;
    display: flex;
    justify-content: center;
  }
  main {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;

    aside {
      position: relative;
      width: 60vw;
      background: rgb(75, 75, 75);
      @media screen and (max-width: 900px) {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
      }
      .gif {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        @media screen and (max-width: 900px) {
          height: 40vh;
        }
        left: 0;
        top: 0;
        img {
          background: white;
          padding: 2em;
          width: 70%;
          @media screen and (max-width: 900px) {
            width: 60%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  section {
    height: 60vh;
  }
  main {
    flex-direction: column;
  }
}
</style>
