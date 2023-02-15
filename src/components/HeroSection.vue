<template>
  <header :style="{ backgroundImage: 'url(' + backgroundImage + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }">
    <div class="hero-wrapper">
      <div class="img">
        <picture>
          <source media="(min-width:1024px)" :srcset="jwImg575" width="500" height="500">
          <source media="(min-width:740px)" :srcset="jwImg450" width="450" height="450">
          <img class="image" :src="jwImg360" width="360" height="360" alt="person med uppsatt mörkt hår i en knut som ser snett in i kameran">
        </picture>
      </div>
    </div>
      <div class="container">
        <p>Hi There</p>
        <h1>I'm Jenny</h1>
        <p><span class="soon">soon-to-be</span> Front End Developer</p>
        <p class="textColor">
          <span class="material-symbols-outlined">location_on</span>
          Karlstad
        </p>
      </div>
 
  </header>
</template>

<script setup>
  import jwImg360 from "/src/assets/img/profilbild_jwx360w.webp";
  import jwImg450 from "/src/assets/img/profilbild_jwx450w.webp";
  import jwImg575 from "/src/assets/img/profilbild_jwx575w.webp";
  import backgroundImage from '../assets/img/backgroundImgx1400w.webp'
</script>

<style scoped lang="scss">
header {
  background-color: black;
  min-height: 70vh;
  width: 100%;
  // background-image: url('/assets/img/backgroundImgx740w.webp');
  background-size: cover;
  background-repeat: no-repeat;
  color: $primaryColorLight;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.container {
  position: relative;
  margin-left: 2rem;

  p {
    text-transform: uppercase;
    margin-bottom: 0;
  }

  h1 {
    color: $tertiaryColorLight;
    margin-top: -1rem;
    font-size: 4.5rem;
    font-family: $secondaryFont;
    text-shadow: 1px 1px 1px $tertiaryColorDark;
  }

  h1 + p {
    margin-top: -4rem;
    font-size: 1rem;
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

  .soon {
    text-transform: none;
    font-style: italic;
    font-size: 0.75rem;
    padding-top: 0.2rem;
    color: $primaryColorLight;
    display: block;
  }
}

.about {
  border: 2px solid $primaryColorDark;
  position: relative;
  display: flex;
}

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30%;
  width:auto;
  border-radius: 50%;
  top: 8rem;
  box-shadow: 1px 1px 16px $tertiaryColorDark;
}

@media (width >= 740px) {

  // header {
  //   // background-image: url('/assets/img/backgroundImgx1024w.webp');
  // }
  .hero-wrapper {
    display: flex-reverse;
    flex-direction: row;

    .image {
      margin-top: 10%;
      margin-left: auto;
      border-radius: 50%;
    }
  }
}

@media (width >= 1024px) {

  header {
    // background-image: url('/assets/img/backgroundImgx1400w.webp');
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background-size: contain;

    .hero-wrapper {
      margin-right: 13%;

      .image {
     
        border-radius: 50%;
        display: inline;
      }
    }

    .container {
      margin-left: 10%;
      margin-top: 30%;
      
    }
  }
}


</style>
