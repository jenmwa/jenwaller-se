<script setup>
import BurgerButton from './BurgerButton.vue';
import MainMenu from './MainMenu.vue';
</script>

<template>
  <div class="navbar">
    jenwaller.se
    <BurgerButton />
  </div>
  <MainMenu />
  
</template>

<style scoped lang="scss">
.navbar {
  background-color: lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
