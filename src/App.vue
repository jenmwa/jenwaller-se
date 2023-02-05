<script setup>
  import NavBar from './components/NavBar.vue';
  import HeroSection from './components/HeroSection.vue';
  import AboutMe from './components/AboutMe.vue';
  import TechSection from './components/TechSection.vue';
  import ProjectSection from './components/ProjectSection.vue';
  import ContactSection from './components/ContactSection.vue';
  import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <div class="main">
    <NavBar class="nav"/>
    <div class="container">
      <div class="sections">
        <HeroSection/><br>
        <AboutMe/><br>
        <TechSection/><br>
        <ProjectSection/><br>
        <ContactSection/><br>
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
  margin: 0 2rem 2rem 2rem;
  border: 2px solid black;
  padding: 0 2rem;
}

.sections {
  background-color:white;

}

</style>
