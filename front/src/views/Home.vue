<template>
  <div class="home">
    <div class="header-image">
      <img src="@/assets/HomeImages/headerImage.jpg" alt="" />
    </div>

    <section></section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>
.home {
  overflow-x: hidden;
  .header-image {
    display: flex;
    justify-content: center;
    img {
    }
  }
}
</style>
