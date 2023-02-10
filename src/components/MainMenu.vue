<template>
  <nav class="base">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#tech">Tech</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><span class="material-symbols-outlined">light_mode</span></li>
    </ul>
  </nav>
</template>

<script lang="js">
export default {};
</script>

<style scoped lang="scss">
.base {
  margin: 0;
  background-color: rgba(10, 10, 10, 0.75);
  position: absolute;
  width: 100%;
  top: 2.2rem;
  right: 0;

  ul {
    text-align: center;
  }

  li {
    list-style: none;
    line-height: 3rem;
  }
}
</style>
