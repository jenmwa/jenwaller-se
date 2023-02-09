<script setup>
import CardElement from './CardElement.vue';
</script>

<template>
  <section class="portfolio" id="portfolio">
    <h3>Portfolio</h3>
      <div class="project-section">
    <!-- projectsection<br><br>
      Todo<br> [javascript]<br>
      munkshoppen [grupparb. js]<br>
      ketchup<br> [grupparb. Vue+ts]<br>
      portfolio [html+css]<br>
      <br><br>
      övrigt:<br>
      sleeq [grapphic socials + web template]<br>
      bravåbemanning [web, template +deploy]<br>
      Monroe Stainless [web, wordpress]<br>
      stronger you [graphic]<br> -->

      <CardElement class="card-element" />
      <CardElement class="card-element" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.portfolio {
  background-image: url('/parallaxBackground.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;

  background-color: black;
  color: $primaryColorLight;

}
div {

  h3 {
    margin-left: 2rem;
    padding: 4rem 0 2rem 0;
  }

  .card-element {
    margin: 2rem 0;
    transition: 0.1s ease-out;
    cursor: default;

    &:hover {
      scale: 1.05;
      transition: 0.4s ease-in;
      border: $accessoryColor2;
    }
  }
  @media (width >= 640px) {
    .project-section {
      display: flex;
    }
  }

}
</style>
