<template>
  <header :class="{ 'scrolled-nav': scrollNav }">
    <nav>
      <div class="branding">
        <img src="./images/logo.jpg" alt="" />
        <p>Book Table</p>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'about' }">About</router-link>
        </li>
        <li v-if="!loginStatus">
          <router-link class="link" :to="{ name: 'AuthenticationPanel' }"
            >Login</router-link
          >
        </li>
        <li v-else>
          <router-link
            class="link"
            @click.native="setLoginStatus"
            :to="{ name: 'Home' }"
            >Log out</router-link
          >
        </li>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="far fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'about' }"
              >About</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Login' }"
              >Login</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navigation",

  data() {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  computed: {
    loginStatus() {
      return this.$store.getters.getLoginStatus;
    },
  },
  methods: {
    setLoginStatus() {
      document.cookie = "token=''";
      this.$store.commit("SET_LOGIN_STATUS", false);
    },
    toggleMobileNav(): void {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen(): void {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    updateScroll(): void {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrollNav = true;
        return;
      }
      this.scrollNav = false;
    },
    AddDebil() {
      return "Ukasz" + 1;
    },
  },
});
</script>
<style lang="scss" scoped>
@import url("http://fonts.googleapis.com/css?family=Berkshire+Swash&subset=latin,latin-ext");
header {
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }
    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
      &:hover {
        color: rgb(255, 132, 0);
        border-color: rgb(255, 132, 0);
      }
    }
    .branding {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        transition: 0.5s ease all;
      }
      p {
        margin-left: 12px;
        color: white;
        font-size: 24px;
        font-family: "Berkshire Swash", sans-serif;
      }
    }
    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }
    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }
    .icon-active {
      transform: rotate(180deg);
    }
    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: 0;
      li {
        margin-left: 0;
        .link {
          color: #000;
        }
      }
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }
    .mobile-nav-enter,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }
    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}
.scrolled-nav {
  background-color: #000;
  nav {
    padding: 8px 0;
    .branding {
      img {
        width: 40px;
      }
    }
  }
}
</style>
