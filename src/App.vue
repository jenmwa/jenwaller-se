<script setup>
  import NavBar from './components/NavBar.vue';
  import HeroSection from './components/HeroSection.vue';
  import AboutMe from './components/AboutMe.vue';
  /*import ParallaxHero from './components/ParallaxHero.vue';*/
  import TechSection from './components/TechSection.vue';
  import ProjectSection from './components/ProjectSection.vue';
  import ContactSection from './components/ContactSection.vue';
  import FooterSection from './components/FooterSection.vue';
import WildSection from './components/WildSection.vue';
</script>

<template>
  <div class="main">
    <NavBar class="nav"/>
    <div class="container">
      <div class="sections">
        <HeroSection/>
        <AboutMe/>
        <!--<ParallaxHero />-->
        <TechSection/>
        <ProjectSection/>
        <WildSection/>
        <ContactSection/>
      </div>
    </div>
    <div class="footer">
      <FooterSection/>
    </div>
</div>
</template>

<style scoped lang="scss">

.main {
  max-width: 650px;
  /*border: 2px solid black;*/
}

.nav {
  position: fixed;
  width: 100vw;
  z-index: 100;
}

</style>
