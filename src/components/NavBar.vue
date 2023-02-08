<script lang="js">
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
    },
    hideMenuOnClickOutside(event) {
      if (this.showMenu && !event.target.closest('.navbar')) {
        this.showMenu = false;
      }
    }
  },
  mounted() {
    window.addEventListener('click', this.hideMenuOnClickOutside);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hideMenuOnClickOutside);
  }
}
</script>

<template>
  <div class="navbar">
    <p>jenwaller.se</p>
    <BurgerButton @click="toggleMenu"/>
    <transition name="slide-fade">
      <MainMenu class="mainmenu" v-if="showMenu" @click="toggleMenu"/>
    </transition>
  </div>
 
</template>

<style scoped lang="scss">
.navbar {
  height: 50px;
  background-color: black;
  color: $accessoryColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  max-width: 620px;

  p {
    transition: transform 500ms;
    transition-timing-function: cubic-bezier(.75, -3, .25, 4);
    cursor:default;

    &:hover {
      transform: scale(1.1);
      transition: .4s ease-in;
      color: $accessoryColor2;
    }
  }
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
