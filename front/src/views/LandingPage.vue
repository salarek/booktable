<template>
  <div></div>
</template>
<script>
export default {
  name: "LandingPage",
  components: {},
  data() {
    return {};
  },
  created() {
    this.$store.commit("SET_LOGIN_STATUS", true);
    console.log(document.cookie);
    if (document.cookie == "") {
      this.$router.push("/");
    }
  },
};
</script>
