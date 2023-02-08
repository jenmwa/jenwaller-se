<template>
  <nav class="base">
    <ul @click="emitCloseEvent">
      <li><a href="#about">About</a></li>
      <li><a href="#about">Tech</a></li>
      <li><a href="#about">Portfolio</a></li>
      <li><a href="#about">Contact</a></li>
      <li><span class="material-symbols-outlined">light_mode</span></li>
    </ul>
  </nav>  
</template>

<script>
export default {
  methods: {
    emitCloseEvent() {
      this.$emit('close');
    }
  }
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
  line-height: 3rem;
  }

}

</style>