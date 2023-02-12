<template>
  <div class="navbar">
    <a href="#index"><p>jenny waller</p></a>
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

a {
      text-decoration: none;
    }
.navbar {
  position: fixed;
  width: 100%;
  height: 50px;
  background-color:#0f0f0f;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
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
    margin-top: 1.5rem;

    &:hover {
      transform: scale(1.1);
      transition: 0.4s ease-in;
      color: $accessoryColor2;
    }
  }
}

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
