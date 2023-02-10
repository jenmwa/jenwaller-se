<template>
  <div class="navbar">
    <p><a href="#index">jenny waller</a></p>
    <BurgerButton @click="toggle" :isOpen="showMenu" />
    <transition name="slide-fade">
      <MainMenu class="mainmenu" v-if="showMenu" @click="toggle" />
    </transition>
  </div>
</template>

<script>
import BurgerButton from './BurgerButton.vue';
import MainMenu from './MainMenu.vue';
export default {
  components: {
    BurgerButton,
    MainMenu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggle() {
      this.showMenu = !this.showMenu;
    },
    hideMenuOnClickOutside(event) {
      if (!this.showMenu) return;
      if (!event.target.closest('.navbar')) {
        this.showMenu = false;
      }
    },
  },
  mounted() {
    window.addEventListener('click', this.hideMenuOnClickOutside);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hideMenuOnClickOutside);
  },
};
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  width: 100%;

  height: 50px;
  background-color: black;
  color: $accessoryColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;

  p {
    transition: transform 500ms;
    transition-timing-function: cubic-bezier(0.75, -3, 0.25, 4);
    cursor: default;
    z-index: 10;

    &:hover {
      transform: scale(1.1);
      transition: 0.4s ease-in;
      color: $accessoryColor2;
    }

    a {
      text-decoration: none;
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
