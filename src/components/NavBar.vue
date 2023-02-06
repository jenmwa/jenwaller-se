<script>
import BurgerButton from './BurgerButton.vue';
import MainMenu from './MainMenu.vue';

export default {
  components: {
    BurgerButton,
    MainMenu
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log('clickclick');
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<template>
  <div class="navbar">
    jenwaller.se
    <BurgerButton @click="toggleMenu"/>
  </div>
  <MainMenu class="mainmenu" v-if="showMenu"/>
</template>

<style scoped lang="scss">
.navbar {
  background-color: lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .mainmenu {
    z-index: 10;
  }
}

</style>
