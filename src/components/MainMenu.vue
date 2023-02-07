<template>
  <nav class="base">
    <ul>
      <li><a href="#about">About</a></li>
      <li>Tech</li>
      <li>project</li>
      <li>contact</li>
      <li><span class="material-symbols-outlined">light_mode</span></li>
    </ul>
  </nav>  
</template>

<script>
  export default {
    props: ['isOpen'],
  };
</script>

<style scoped lang="scss">
.base {
  margin: 0;
  background-color: rgba(10,10,10,0.75);
  position: absolute;
  width: 100%;
  top: 2.2rem;
  right: 0;

  ul {
    text-align: center;
  }

  li {
  list-style: none;
  }

  a {
    color: $accessoryColor;
    text-underline-offset: 0.4rem;
  }
}

</style>