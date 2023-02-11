<template>
  <header>
    <div class="hero-wrapper">
      <div class="img">
        <!-- <img class="image" src="/profilbild_jw.jpg" /> -->
        <img class="image" srcset="/profilbild_jwx360w.png 360w, /profilbild_jwx450w.png 450w, /profilbild_jwx575w.png 575w" sizes="(max-width:740px) 375px, (max-width:1024px) 450px, 575px" src="/profilbild_jwx575w.png" alt="person med mörkt hår som ler mot kameran" title="jenny_waller"/>
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

<script setup></script>

<style scoped lang="scss">
header {
  background-color: black;
  min-height: 70vh;
  width: 100%;
  background-image: url('/backgroundImgx740w.png');
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
  width: 360px;
  border-radius: 50%;
  //right: 2rem;
  top: 8rem;
  box-shadow: 1px 1px 16px $tertiaryColorDark;
}

@media (width >= 740px) {

  header {
    background-image: url('/backgroundImgx1024w.png');
  }
  .hero-wrapper {
    display: flex-reverse;
    flex-direction: row;

    .image {
      margin-top: 10%;
      margin-left: auto;
      width: 450px;
      border-radius: 50%;
    }
  }
}

@media (width >= 1024px) {

  header {
    background-image: url('/backgroundImgx1400w.png');
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background-size: contain;

    .hero-wrapper {
      margin-right: 10%;

      .image {
        width: 575px;
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
