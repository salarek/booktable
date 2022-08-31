<template>
  <div id="landing" class="landing">
    <header class="header-bar">
      <img
        style="margin-left: 2%; height: 4vh"
        src="@/assets/logo2.png"
        alt=""
      />

      <input
        class="m-3 p-1"
        style="border-radius: 10px"
        type="text"
        placeholder="Szukaj"
      />
      <div v-if="toggleButtonVisibility" v-b-toggle.sidebar-no-header>
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z"
          />
        </svg>
      </div>
      <button
        style="
          background-color: transparent;
          position: absolute;
          height: 8%;
          right: 0px;
          border: none;
        "
        @click="logout"
      >
        <svg style="width: 34px; height: 34px" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z"
          />
        </svg>
      </button>
    </header>
    <div class="main-body"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  name: "landing",
  data() {
    return {
      toggleButtonVisibility: false,
      name: "",
      email: "",
      level: 0,
      processlevel: 0,
      categories: "",
      items: "",
      visible: true,
      activity: 0,
      windowWidth: window.innerWidth,
      mode: "achievments",
    };
  },
  computed: {
    avatarImg: function () {
      console.log(this.avatar[0]);
      let name = this.avatar[0];
      console.log(name);
      let newName = name.substring(29, name.length);
      return newName;
    },
  },
  watch: {
    windowWidth: function () {
      console.log("XDDDDD");
      console.log(window.innerWidth);
      if (window.innerWidth < window.innerHeight) {
        this.toggleButtonVisibility = true;
        this.visible = false;
      } else {
        this.toggleButtonVisibility = false;
        this.visible = true;
      }
    },
  },
  methods: {
    resizeWindow() {
      let itm = document.getElementById("landing")?.getBoundingClientRect();
      this.windowWidth = itm.width;
    },

    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  created() {
    window.addEventListener("resize", this.resizeWindow);
    // if (localStorage.getItem("token") === null) {
    //   this.$router.push("/login");
    // }
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeWindow);
  },

  mounted() {
    axios
      .get("http://localhost:5000/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        this.name = res.data.user.name;
        this.email = res.data.user.email;
        this.level = res.data.user.level;
        this.processlevel = res.data.user.processlevel;
        this.categories = res.data.user.categories;
        this.items = res.data.user.items;
        this.activity = res.data.user.activity;
        this.avatar = res.data.user.avatar;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");
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
.bsidebar::v-deep .b-sidebar {
  top: 8%;
}
.landing {
  font-family: "Cairo", sans-serif;
  position: absolute;
  overflow: hidden;
  background-color: $primary;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
tr {
  font-size: 1rem;
}
tr:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.content {
  position: relative;
  width: 100%;
}
.main-body {
  display: flex;
  flex-direction: row;
}
.header-bar {
  background-color: $third;
  width: 100%;
  height: 8vh;
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
.main-view {
  font-family: "Cairo", sans-serif;
  font-size: 2rem;
  position: relative;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar {
  // background-color: rgb(0, 26, 255);
  background-repeat: repeat-y;
  color: white;
  font-size: 1.3rem;
  background-color: $primary;
  padding: 10px;
  height: 100vh;
  transition: all 0.5s;
}
.hiddenspan {
  white-space: pre;
  transition: all 0.5s;
  display: none;
  opacity: 0;
}
.showspan {
  white-space: pre;
  transition: all 0.5s;
  opacity: 1;
}
</style>
