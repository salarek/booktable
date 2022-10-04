<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <img src="./images/logo.jpg" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>Gowno</li>
        <li>Gowno</li>
        <li>Gowno</li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss">
header {
  z-index: 99;
  width: 100%;
  position: fixed;
}
</style>
