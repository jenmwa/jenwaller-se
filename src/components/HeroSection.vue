<template>
  <header>
    <div class="img">
      <img class="image" src="/profilbild_jw.jpg" />
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
  background-image: url('/backgroundImg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  color: $primaryColorLight;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.container {
  position: relative;

  /*border: 2px solid $primaryColorDark; */
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
</style>
