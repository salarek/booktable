<template>
  <section>
    <h1>Logowanie</h1>
    <div class="form">
      <div class="label">Email:</div>
      <input type="text" />
    </div>
    <div class="form">
      <div class="label">Hasło:</div>
      <input type="text" />
      <button>Zaloguj się</button>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
section {
  top: 100px;
  width: 100%;
  position: relative;
  background: white;
  padding: 2em;

  h1 {
    font-weight: 500;
    font-size: 2.5rem;
    padding: 0.5em;
  }
  .form {
    margin: 1em;
    .label {
      font-size: 1.6rem;
      padding: 0.3em;
    }
    input {
      font-size: 1.6rem;
      width: 100%;
      border: none;
      padding-left: 12px;
      border-bottom: 2px solid rgb(146, 146, 146);

      &:focus {
        outline: none;
        border: none;
        border-bottom: 2px solid rgb(255, 132, 0);
      }
    }
    button {
      font-family: "Bellefair", sans-serif;
      font-size: 1.5rem;
      background: rgb(146, 146, 146);
      color: white;
      margin-top: 50px;
      padding: 0.5em;
      transition: 0.5s;
      &:hover {
        cursor: pointer;
        background: rgb(255, 132, 0);
      }
      &:focus {
        transform: scale(0.9);
      }
    }
  }
}
</style>
