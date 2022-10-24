<template>
  <section>
    <h1>Rejestracja</h1>
    <div class="form">
      <div class="label">Email:</div>
      <input type="text" />
    </div>
    <div class="form">
      <div class="label">Hasło:</div>
      <input
        :type="passwordMode"
        v-model="password"
        class="form-control"
        id="inputPassword"
        name="password"
      />
    </div>

    <div class="form">
      <div class="label">Powtórz Hasło:</div>
      <input
        :type="passwordMode"
        v-model="repeatPassword"
        class="form-control"
        id="inputPassword"
        name="password"
      />
      <button>Zarejestruj konto</button>
    </div>
    <p>
      <u @click="switchMode">Powrót&nbsp;do&nbsp;logowania&nbsp;</u>
    </p>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return { passwordMode: "password" };
  },
  methods: {
    switchMode() {
      this.$emit("switchMode", "login");
    },
  },
});
</script>
<style lang="scss" scoped>
section {
  top: 100px;
  width: 100%;
  position: relative;
  background: white;
  padding: 2em;
  p {
    margin-top: 22px;
    font-size: 1.6rem;
    u {
      cursor: pointer;
      color: rgb(216, 7, 7);
    }
  }
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
      padding-bottom: 2px;
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
