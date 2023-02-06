<template>
  <nav class="base">
    <!-- <nav v-if="isOpen" class="base"> -->
    <!--if-sats, visas/ visas inte om isOpen är true/false -->
    <ul>
      <li>About</li>
      <li>Tech</li>
      <li>project</li>
      <li>contact</li>
      <li><span class="material-symbols-outlined">
light_mode
</span></li>
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
  background-color: rgba(10,10,10,0.5);
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
}

</style>