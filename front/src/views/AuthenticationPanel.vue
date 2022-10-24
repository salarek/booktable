<template>
  <div class="authentication-panel">
    <div class="background-image"></div>
    <main>
      <transition mode="out-in" name="slide-up">
        <login v-if="mode === 'login'" @switchMode="switchMode"></login>
        <sign-up v-else @switchMode="switchMode"></sign-up>
      </transition>
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
import SignUp from "../components/SignUp/SignUp.vue";
export default Vue.extend({
  components: { Login, SignUp },
  data() {
    return {
      mode: "login",
    };
  },
  methods: {
    switchMode(val: string): void {
      this.mode = val;
    },
  },
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
      @media screen and (max-width: 800px) {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
      }
      @media screen and (max-width: 800px) and (max-height: 920px) {
        display: none;
      }
      .gif {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        @media screen and (max-width: 800px) {
          height: 40vh;
        }

        left: 0;
        top: 0;
        img {
          background: white;
          padding: 2em;
          width: 80%;
          @media screen and (max-width: 800px) {
            width: auto;
            height: 87%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  section {
    height: 65vh;
  }
  main {
    flex-direction: column;
  }
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
}

.slide-up-leave-to {
  opacity: 0;
}
</style>
