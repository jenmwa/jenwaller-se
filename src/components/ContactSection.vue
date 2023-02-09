<template>
  <section id="contact">
    <h3>Contact</h3>
    <div>
      <p>
        Want to talk?<br />
        Let’s connect!
      </p>
      <div class="icon-container">
        <img class="icons" src="/linkedin-fill-svgrepo-com.svg" />
        <img class="icons" src="/github-svgrepo-com.svg" />
      </div>
    </div>

    <a href="mailto:jenny.waller@medieinstitutet.se" target="_blank">jenny.waller@medieinstitutet.se</a>
    <a href="tel:+46701507714">0701507714</a>
    <br /><br />
    <p class="textColor">
      <span class="material-symbols-outlined">location_on</span>
      <a href="https://www.google.se/maps/place/Karlstad/@59.3929235,13.2433407,10z/data=!3m1!4b1!4m5!3m4!1s0x465cb3d8e8ebe6f5:0xb8159334bc4aadd!8m2!3d59.4021806!4d13.5114978" target="_blank">Karlstad</a>
    </p>
  </section>
</template>

<style scoped lang="scss">

section {
  background-color: black;
  color: $tertiaryColorLight;
  padding: 4rem 2rem;
  text-align: center;

  a {
    display: block;
    margin-bottom: 1rem;
  }

  .icons {
    margin: 1rem 0.5rem;
    width: 50px;
    filter: invert(72%) sepia(82%) saturate(366%) hue-rotate(330deg) brightness(98%) contrast(92%);
    transition: transform 500ms;
    transition-timing-function: cubic-bezier(0.75, -3, 0.25, 4);
    cursor: default;

    &:hover {
      filter: invert(22%) sepia(95%) saturate(2648%) hue-rotate(307deg) brightness(83%) contrast(95%);
      transform: scale(1.1);
      transition: 0.4s ease-in;
    }
  }
  .textColor {
    color: $accessoryColor;
  }

  .material-symbols-outlined {
    position: relative;
    top: 0.3rem;
    color: $accessoryColor;
    transition: transform 500ms;
    transition-timing-function: cubic-bezier(0.75, -3, 0.25, 4);
    cursor: default;

    &:hover {
      transform: scale(1.1);
      transition: 0.4s ease-in;
      color: $accessoryColor2;
    }
  }
}

</style>
