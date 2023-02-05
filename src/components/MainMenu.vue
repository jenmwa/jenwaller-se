<template>
  <nav class="base">
    <!-- <nav v-if="isOpen" class="base"> -->
    <!--if-sats, visas/ visas inte om isOpen är true/false -->
    <ul>
      <li>About</li>
      <li>Tech</li>
      <li>project</li>
      <li>contact</li>
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
  background-color: $secondaryColorLight;

  ul {
    text-align: right;
  }

  li {
  list-style: none;
  }
}

</style>