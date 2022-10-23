<template>
  <main>
    <h1>Szukaj Lokalów</h1>
    <section>
      <div v-for="item in randomLocals" :key="item.id">
        <div class="section-item">
          <img src="@/components/SearchTables/images/lokal.jpg" alt="" />
          <div class="text">{{ item.local }}</div>
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
  data() {
    return {
      info: null,
      randomLocals: [],
    };
  },
  computed: {},
  mounted() {
    axios.get("http://localhost:5000/cities", {}).then((res) => {
      for (const citi of res.data.cities) {
        for (const localsInCiti of citi.locals) {
          this.randomLocals.push({ citi: citi.citi, local: localsInCiti });
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
  background: rgba(0, 0, 0, 0.1);
  padding: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2.5rem;
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
      background: rgb(255, 255, 255);
      img {
        width: 260px;
      }
      .text {
        margin-top: 10px;
      }
    }
  }
}
</style>
