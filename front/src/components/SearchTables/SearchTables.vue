<template>
  <main :style="{ ...cssStyle }">
    <h1>Szukaj Lokalów</h1>
    <nav>
      <div class="form-item">
        <div class="label">Miasto:</div>
        <input v-model="citi" type="text" />
      </div>
      <div class="form-item">
        <div class="label">Lokal:</div>
        <input v-model="place" type="text" />
      </div>
    </nav>
    <section>
      <div v-for="item in filteredPlaces" :key="item.id">
        <div class="section-item">
          <img src="@/components/SearchTables/images/lokal.jpg" alt="" />
          <div class="text">{{ item.place }}</div>
          <div class="text">{{ item.citi }}</div>
        </div>
      </div>
    </section>
  </main>
</template>
<script lang="ts">
import axios from "axios";
import Vue from "vue";
export default Vue.extend({
  props: ["cssStyle"],
  data() {
    return {
      info: null,
      randomLocals: [],
      citi: "",
      place: "",
    };
  },
  computed: {
    filteredPlaces() {
      const inputCiti = this.citi.toLowerCase();
      const inputPlace = this.place.toLowerCase();
      if (this.citi == "") {
        return this.randomLocals;
      } else {
        return this.randomLocals.filter((item: any) => {
          if (
            item.citi.toLowerCase().includes(inputCiti) &&
            item.place.toLowerCase().includes(inputPlace)
          )
            return item;
        });
      }
    },
  },

  mounted() {
    axios.get("http://localhost:5000/cities", {}).then((res) => {
      for (const citi of res.data.cities) {
        for (const localsInCiti of citi.locals) {
          this.randomLocals.push({ citi: citi.citi, place: localsInCiti });
        }
      }
    });
  },
});
</script>
<style lang="scss" scoped>
@import url("http://fonts.googleapis.com/css?family=Berkshire+Swash&subset=latin,latin-ext");
main {
  position: absolute;
  top: 800px;
  width: 80%;
  background: rgb(237, 237, 237);
  border-radius: 18px;
  padding: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2%;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .form-item {
      display: flex;
      background: white;
      border-radius: 18px;
      padding: 0.5em;
      margin: 0.5em;
      .label {
        font-size: 1.6rem;
        padding: 0.3em;
      }
      input {
        padding-bottom: 2px;
        font-size: 1.6rem;
        width: 100%;
        border: none;
        padding-left: 12px;
        background: transparent;
        border-bottom: 2px solid rgb(146, 146, 146);

        &:focus {
          outline: none;
          border: none;
          border-bottom: 2px solid rgb(255, 132, 0);
        }
      }
    }
  }
  section {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .section-item {
      margin: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 300px;
      padding: 1em;
      font-size: 1.5rem;
      border-radius: 18px;
      background: rgb(255, 255, 255);
      img {
        border-radius: 18px;
        width: 260px;
      }
      .text {
        margin-top: 10px;
      }
    }
  }
}
</style>
