<script setup>
import CardElement from './CardElement.vue';
</script>

<template>
    <div>
      <h3>Portfolio</h3>
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


    <CardElement class="card-element"/>
    <CardElement class="card-element"/>

  </div>
  </template>
  
  <style scoped lang="scss">
  
  div {
    background-image: url('/parallaxBackground.jpg');
    background-size:contain;
    background-repeat: no-repeat;
    background-color: black;
    padding: 2rem;
    color: $primaryColorLight;

    h3 {
    padding: 2rem 0;
    }

    .card-element {
      margin: 2rem 0;
      transition: .1s ease-out;
      cursor:default;

      &:hover {
        scale: 1.05;
        transition: .4s ease-in;
        border: $accessoryColor2;
      }
    }
  }
  
  </style>