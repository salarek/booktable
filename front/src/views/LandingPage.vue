<template>
  <div class="langind-page">
    <aside>
      <!-- <img
        :src="require('../assets/AuthenticationPanelImages/bcg.jpg')"
        alt=""
      /> -->
      <div class="info-panel">
        <p>Użytkownik: Paweł</p>
        <p>Wybrany lokal:</p>
      </div>
    </aside>
    <search-tables
      :cssStyle="{
        position: 'absolute',
        top: '120px',
        width: '70%',
        left: '0%',
      }"
    ></search-tables>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchTables from "../components/SearchTables/SearchTables.vue";
export default {
  name: "LandingPage",
  components: { SearchTables },
  created() {
    this.$store.commit("SET_LOGIN_STATUS", true);
    console.log(document.cookie);
    if (document.cookie == "") {
      this.$router.push("/");
    }
  },
};
</script>
<style lang="scss" scoped>
.langind-page {
  overflow-x: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  background-color: rgb(237, 237, 237);
  aside {
    background-image: url("../assets/AuthenticationPanelImages/bcg.jpg");
    background-repeat: repeat-y;
    width: 30%;
    justify-content: center;
    display: flex;
    align-items: center;
    position: fixed;
    height: 100%;
    right: 0%;
    img {
      width: 700px;
      height: 100%;
    }
    .info-panel {
      position: fixed;
      top: 200px;
      padding: 1em;
      width: 25%;
      height: 60%;
      border-radius: 18px;
      background: white;
      color: black;
      p {
        margin: 0.5em;
        font-size: 1.5rem;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 2px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(94, 94, 94);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(94, 94, 94);
  }
}
</style>
