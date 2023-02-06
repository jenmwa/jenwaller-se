<template>
  <div>
   <p>Hi There</p>
   <h2>Don't be a stranger!</h2> 
    <span class="material-symbols-outlined">waving_hand</span>
    <p class="about-me-text">I'm Jenny, Nice to meet you! </p>
    <p class="about-me-text">I’m a Front-End Developer Student at Medieinstitutet in Stockholm, Sweden and I really enjoy playing around with colors, fonts, images, taking photos, being creative, and make websites come to life with both design and functionality.</p>
    <p class="about-me-text">Right now I’m looking for LIA for the fall 2023!
      I’m looking for a company where I will be a part of a team and where I could continue grow in my role as a Front-End developer.</p>
    <p>Should we talk?<br> Let’s connect!</p>
    <img class="icons" src="/linkedin-fill-svgrepo-com.svg">  
    <p class="meaning-of-life">Try and be nice to people, avoid eating fat, read a good book every now and then, get some walking in, and try and live together in peace and harmony with people of all creeds and nations</p>
    <p>and for everybody's sake, KEEP IT SIMPLE!</p>
    <span class="material-symbols-outlined rocket">
rocket_launch
</span>
  </div>
</template>

<style scoped lang="scss">

div {
  padding: 2rem;
  height: 100vh;
  /*border: 2px solid $secondaryColorDark; */
  background: linear-gradient(black, $secondaryColorDark);
  color: $secondaryColorLight;

  p {
  text-transform: uppercase;
  margin-bottom: 0;
}

h2 {
    margin-top: -0.5rem;
    font-size: 2.5rem;
    font-family: $secondaryFont;
    text-shadow: 1px 1px 1px $tertiaryColorDark;
    display: inline;
  }

  span {
  margin-left: 1rem;
  font-size: 3rem;
  }
  .about-me-text {
  text-transform: none;
  }

  .icons {
    margin-top: 1rem;
    width: 35px;
    filter: invert(72%) sepia(82%) saturate(366%) hue-rotate(330deg) brightness(98%) contrast(92%);
    transition: transform 500ms;
    transition-timing-function: cubic-bezier(.75, -3, .25, 4);
    cursor:default;

    &:hover {
      filter: invert(22%) sepia(95%) saturate(2648%) hue-rotate(307deg) brightness(83%) contrast(95%);
      transform: scale(1.1);
      transition: .4s ease-in;
    }
    
  }
  .meaning-of-life {
    text-transform: none;
    font-family: $secondaryFont;
    width: 60%;
    font-style: italic;

  }
  .rocket {
    font-size: 4rem;
    margin-top: 2rem;
  }
}

</style>