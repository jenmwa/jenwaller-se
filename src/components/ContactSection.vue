<template>
  <section id="contact">
    <h3>Contact</h3>
    <div>
      <p>
        Want to talk?<br />
        Let’s connect!
      </p>
      <div class="icon-container">
        <a href="https://www.linkedin.com/in/jenny-waller/" target="_blank"><img class="icons" src="/linkedin-fill-svgrepo-com.svg" alt="linkedIn symbol logo" width="50" height="50"/></a>
        <a href="https://github.com/jenmwa" target="_blank"><img class="icons" src="/github-svgrepo-com.svg" alt="Github symbol logo" width="50" height="50"/></a>
      </div>
    </div>

    <a href="mailto:jen@jenwaller.se?subject=Let's Connect!" target="_blank" class="block">jen@jenwaller.se</a>
    <a href="tel:+46701507714" target="_blank" class="block">0701507714</a>
    <br /><br />
    <p class="textColor">
      <span class="material-symbols-outlined">location_on</span>
      <p class="textColor">Karlstad</p>
    </p>
  </section>
</template>

<style scoped lang="scss">

section {
  background-color: #0f0f0f;
  color: $tertiaryColorLight;
  padding: 4rem 2rem;
  text-align: center;

  a {
    display: inline;
  }

  .block {
    display: block;
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
    font-size: 3rem;
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
