<template>
  <div class="langind-page">
    <search-tables
      :cssStyle="{
        position: 'absolute',
        top: '120px',
        width: '70%',
        left: '0%',
      }"
    ></search-tables>
    <aside>
      <p>Użytkownik: Paweł</p>
      <p>Wybrany lokal:</p>
    </aside>
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
  .header-image {
    justify-content: center;
  }
  aside {
    position: absolute;
    top: 200px;
    padding: 1em;
    right: 0%;
    width: 25%;
    height: 60%;

    background: white;
    color: black;
    p {
      margin: 0.5em;
      font-size: 1.5rem;
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
