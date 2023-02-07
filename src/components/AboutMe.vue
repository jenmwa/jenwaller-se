<template>
  <div class="about" id="about">
   <p>Welcome</p>
   <h2>Don't be a stranger!</h2> 
    <span class="material-symbols-outlined">waving_hand</span>
    <p class="about-me-text">I'm Jenny, Nice to meet you! </p>
    <p class="about-me-text">I’m a Front-End Developer Student at Medieinstitutet in Stockholm, Sweden and I really enjoy playing around with colors, fonts, images, taking photos, being creative, and make websites come to life with both design and functionality.</p>
    <p class="about-me-text">Right now I’m looking for LIA for the fall 2023!<br>
      I’m looking for a company where I will be a part of a team and where I could continue grow in my role as a Front-End developer.</p>
    <p>Want to talk?<br> Let’s connect!</p>

    <img class="icons" src="/linkedin-fill-svgrepo-com.svg">
    <img class="icons" src="/email-svgrepo-com.svg">
    <img class="icons" src="/github-svgrepo-com.svg">

    <div class="words">
      <p class="meaning-of-life">Try and be nice to people, avoid eating fat, <br>read a good book every now and then,<br>get some walking in, <br>and try and live together in peace and harmony with people of all creeds and nations</p>
      <p>and for everybody's sake, KEEP IT SIMPLE!</p>
    </div>
    <span class="material-symbols-outlined rocket">
rocket_launch
</span>
  </div>
</template>

<style scoped lang="scss">

.about {
  padding: 2rem;
  min-height: 100vh;
  /*border: 2px solid $secondaryColorDark; */
  background: linear-gradient(black, $secondaryColorDark);
  color: $secondaryColorLight;

  p {
  text-transform: uppercase;
  margin-bottom: 0;
}

h2 {
    margin-top: -0.5rem;
    font-size: 3rem;
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

  .icons, .material-symbols-outlined {
    margin-top: 1rem;
    margin-right: 1rem;
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
  div.words {
    text-align: right;
    background: none;
    height: 0; 
    margin-top: 5rem;
    height: auto;
  
    .meaning-of-life {
      font-size: 0.75;
      font-weight: 100;
      margin-left: auto;
      padding-left: 1rem;
      text-transform: none;
      font-family: $secondaryFont;
      width: 70%;
      font-style: italic;
    }
  }
  .rocket {
    font-size: 4rem;
    margin-top: 2rem;
  }
}

</style>