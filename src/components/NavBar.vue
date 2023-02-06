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
    <transition name="slide-fade">
      <MainMenu class="mainmenu" v-if="showMenu"/>
    </transition>
  </div>
 
</template>

<style scoped lang="scss">
.navbar {
  background-color: black;
  color: $accessoryColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from {
  transform: translateY(-40px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

</style>
