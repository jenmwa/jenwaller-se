<script setup>
</script>

<template>
  <header>
    <div class="container">
      <p>Hi there</p>
      <h1>I'm Jenny</h1>
      <p>Front End Developer</p>
      <p class="textColor">
        <span class="material-symbols-outlined">location_on</span>
        Karlstad</p>
    </div>
  </header>
  <div class="about">
    <div class="about-text"></div>
    <div class="img"></div>    
  </div>

</template>

<style scoped lang="scss">

header {
  background-color: black;
  min-height: 70vh;
  width: 100%;
  background-image: url('./backgroundImg.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  color: $primaryColorLight;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.container {
  position: relative;
  top: 9rem;
  border: 2px solid $primaryColorDark; 

  p {
    text-transform: uppercase;
    font-size: 1rem;
    margin-bottom: 0;
  }

  h1 {
    margin-top: -1rem;
    font-size: 5rem;
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
  p span {
    position: relative;
    top: 0.3rem;
    color: $accessoryColor;

    &:hover {
      scale: 1.2;
      transition: .4s ease-in;
      color: $accessoryColor2;
    }
  }
}

.about {
  border: 2px solid $primaryColorDark; 
  position: relative;
  display: flex;
}


</style>