<template>
  <div class="about" id="about">
    <div class="about-container">
      <p>Welcome<span class="material-symbols-outlined">waving_hand</span></p>

      <h2>Don't be a stranger!</h2>

      <p class="about-me-text">I'm Jenny, Nice to meet you!</p>
      <p class="about-me-text">
        I’m a Front-End Developer Student at Medieinstitutet in Stockholm, Sweden and I really enjoy playing around with
        colors, fonts, images, taking photos, being creative, and make websites come to life with both design and
        functionality.
      </p>
      <p class="about-me-text">
        I'm looking for my new adventure as a Front-End Developer from june <span class="color-text">2024!</span><br />
        I’m looking for a company where I will be a part of a team and where I could continue grow in my role as a
        Front-End developer in the Karlstad - Örebro area.<br />
        Opportunitues involving React, next.js, Node, Figma & UX-design is particular intresting, but at the same
        moment, I'm more than willingly to explore more!<br />
        Right now I'm learning ASP.NET MVC app's, so everything's possible! ✨
      </p>
      <p>
        Want to talk?<br />
        Let's connect!
      </p>
      <div class="icon-container">
        <a href="https://www.linkedin.com/in/jenny-waller/" target="_blank"
          ><img class="icons" src="/linkedin-fill-svgrepo-com.svg" alt="linkedIn symbol logo" width="35" height="35"
        /></a>
        <a href="https://github.com/jenmwa" target="_blank"
          ><img class="icons" src="/github-svgrepo-com.svg" alt="Github logo logo" width="35" height="35"
        /></a>
        <a href="mailto:jenny.waller@medieinstitutet.se?subject=Let's Connect!" target="_blank" class="block"
          ><img class="icons" src="/email-svgrepo-com.svg" alt="email symbol logo" width="35" height="35"
        /></a>
      </div>
    </div>

    <!-- <p class="about-me-text">So who am i?</p>
    <p class="about-me-text">I always want to learn and develop, got an eye for details and I am a problem solver.</p>
    <p class="about-me-text">In my spare time, I really enjoy spending time in the forest for daily hikes, going to concerts (at least once a month, that's not to much is it?) and be amongs friends and family, preferable over some good food and drinks.</p> -->
  </div>
</template>

<style scoped lang="scss">
.about {
  padding: 2rem;
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

  a {
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
    transition-timing-function: cubic-bezier(0.75, -3, 0.25, 4);
    cursor: default;
    margin-left: 0.2rem;
    color: $accessoryColor;

    &:hover {
      transform: scale(1.5);
      transition: 0.4s ease-in;
      color: $accessoryColor2;
    }
  }

  .icons,
  .material-symbols-outlined {
    margin-top: 1rem;
    margin-right: 1rem;
    width: 35px;
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
}
@media (width >= 740px) {
  .about-container {
    max-width: 75%;
  }
}

@media (width >= 1024px) {
  .about {
    padding-left: 10%;
  }
  .about-container {
    max-width: 65%;
  }
}
</style>
