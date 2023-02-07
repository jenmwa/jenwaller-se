<template>
  <div class="about" id="about">

   <p>Welcome<span class="material-symbols-outlined">waving_hand</span></p>

   <h2>Don't be a stranger!</h2> 
    
    <p class="about-me-text">I'm Jenny, Nice to meet you! </p>
    <p class="about-me-text">I’m a Front-End Developer Student at Medieinstitutet in Stockholm, Sweden and I really enjoy playing around with colors, fonts, images, taking photos, being creative, and make websites come to life with both design and functionality.</p>
    <p class="about-me-text">Right now I’m looking for LIA for the fall <span class="color-text">2023!</span><br>
      I’m looking for a company where I will be a part of a team and where I could continue grow in my role as a Front-End developer.</p>

    <p class="about-me-text">So who am i?</p>
    <p class="about-me-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veritatis vitae nostrum veniam accusamus voluptatibus ipsam dolor odio eos? Pariatur omnis enim cumque cupiditate, aut provident autem at totam dolores!</p>

    <p>Want to talk?<br> Let’s connect!</p>
<div class="icon-container">
<img class="icons" src="/linkedin-fill-svgrepo-com.svg">
<img class="icons" src="/github-svgrepo-com.svg">
<img class="icons" src="/email-svgrepo-com.svg">
</div>
    <span class="material-symbols-outlined rocket">
rocket_launch
</span>
  </div>
</template>

<style scoped lang="scss">

.about {
  padding: 2rem;

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

  .color-text {
    font-size: 1.5rem;
    transition: transform 500ms;
    transition-timing-function: cubic-bezier(.75, -3, .25, 4);
    cursor:default;
    margin-left: 0.2rem;
    color: $accessoryColor;

    &:hover {
      transform: scale(1.5);
      transition: .4s ease-in;
      color: $accessoryColor2;
    }
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
  .rocket {
    font-size: 4rem;
    margin-top: 2rem;
  }
}

</style>