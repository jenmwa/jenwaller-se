<template>
  <div class="burger" :class="{ active: isOpen }" @click.prevent="onToggle">
    <button type="button" class="burger-btn" title="Menu">
      <span class="burger-bar burger-bar-1"></span>
      <span class="burger-bar burger-bar-2"></span>
      <span class="burger-bar burger-bar-3"></span>
    </button>
  </div>
</template>

<script lang="js">
export default {
   props: {
     isOpen: Boolean
   },
   methods: {
     onToggle() {
       this.$emit('toggle');
     }
   }
 };
</script>

<style scoped lang="scss">

.burger {
  margin-right: 4rem;
}
.burger-btn {
  position: relative;
  height: 35px;
  width: 37px;
  display: block;
  z-index: 10;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: $accessoryColor;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: $accessoryColor2;
  }
}

.burger-bar-1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar-2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-btn:hover .burger-bar-2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar-2:hover {
  transform: scaleX(1);
}

.burger-bar-3 {
  transform: translateY(6px);
}
.burger.active .burger-btn {
  transform: rotate(-180deg);
}

.burger.active .burger-bar-1 {
  transform: rotate(45deg);
}

.burger.active .burger-bar-2 {
  opacity: 0;
}

.burger.active .burger-bar-3 {
  transform: rotate(-45deg);
}
</style>
