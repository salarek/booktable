<template>
  <section>
    <h1>Logowanie</h1>
    <div class="form">
      <div class="label">Email:</div>
      <input v-model="email" type="text" />
    </div>
    <div class="form">
      <div class="label">Hasło:</div>
      <input v-model="password" type="text" />
      <button @click="login">Zaloguj się</button>
    </div>
    <p>
      Nie masz konta?
      <u @click="switchMode">Zarejestruj&nbsp;się&nbsp;za&nbsp;darmo!</u>
    </p>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    switchMode() {
      this.$emit("switchMode", "signup");
    },
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:5000/login", user).then(
        (res) => {
          //if successfull
          if (res.status === 200) {
            document.cookie = `token=${res.data.token}`;
            this.$router.push("/landingpage");
          }
        },
        (err) => {
          console.log(err.response);
          this.error = err.response.data.error;
        }
      );
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
      padding-bottom: 2px;
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
