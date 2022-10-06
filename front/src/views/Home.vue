<template>
  <div class="home">
    <div class="header-image">
      <img src="@/assets/HomeImages/headerImage.jpg" alt="" />
    </div>

    <nav>
      <div class="nav-item">
        <img src="@/assets/HomeImages/logo.jpg" alt="" />
        <div class="text">Złóż rezerwację w twoim ulubionym miejscu</div>
      </div>
      <div class="nav-item">
        <img src="@/assets/HomeImages/logo.jpg" alt="" />
        <div class="text">Zarejestruj swój lokal i zarządaj rezerwacjami!</div>
      </div>
      <div class="nav-item">
        <img src="@/assets/HomeImages/logo.jpg" alt="" />
        <div class="text">
          Przeglądaj dostępne lokale zarejestowane na Book Table
        </div>
      </div>
    </nav>
    <search-tables></search-tables>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchTables from "../components/SearchTables/SearchTables.vue";
export default {
  name: "Home",
  components: { SearchTables },
};
</script>
<style lang="scss" scoped>
.home {
  overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header-image {
    display: flex;
    justify-content: center;
  }
  nav {
    position: absolute;
    top: 350px;
    display: flex;

    width: 974px;
    overflow-x: auto;
    @media (max-width: 974px) {
      width: 80%;
    }
    .nav-item {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      margin: 0 12px;
      img {
        background: #fff;
        padding: 10px;
        width: 300px;
      }
      .text {
        text-align: center;
        width: 300px;
        padding: 12px;
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
