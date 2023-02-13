<template>
  <section>
    <div>
      <h3>About this site</h3>
      <p>
        I wanted to try out <span class="color-text big">VUE</span> for myself after our team assignment in the course
        Graphical tools for interface design. Really enjoy working with components and this suits me very well!
      </p>
      <p>
        Used <span class="color-text">Vite</span> as my bundler, VUE with <span class="color-text">Javascript</span> as
        framework, packages as <span class="color-text">EsLint</span> and <span class="color-text">prettier</span> for
        linting and formatting and <span class="color-text">Sass</span> as my stylesheet language.
      </p>
      <p>
        The design for this web is based on the hero background image by Greg Rakozy from
        <a href="https://unsplash.com/photos/oMpAz-DN-9I" target="_blank">unsplash</a>, and with that I decided my base
        with dark and light colors and my and two different accessory colors for details.
      </p>
      <p>
        I do really enjoy working with details, old school CSS animations, and with VUE, new, but simple effective ways
        of getting a site come to life. And since I really do enjoy small extras, I've used
        <span class="color-text">GSAP</span> for some animations as well...
        <span class="italic">(Who doesn't like easter eggs?)</span>
      </p>

      <p>
        And this is what came out.<br />
        A onepager, classic portfolio design and graphics based on the hero image. And with a lot of CSS, small details
        and something I really enjoyed create!
        <br /><br />
        KEEP IT SIMPLE and always live to learn!<br />
      </p>
    </div>
    <div>
      Inspiration: <br />
      Image by Greg Rakozy from Unsplash<br />
      BurgerMenu by xxx codepen<br />
      hero section by xxx<br />
      cardElement by xxx codepen<br />
      Fonts by xxx instagram<br />
      Css tricks by xxx instagram<br>
      Cred laptop mockup <a href="https://www.vecteezy.com/free-vector/laptop-mockup">Laptop Mockup Vectors by Vecteezy</a><a href="https://www.vecteezy.com/free-vector/mobile-phone-mockup">Mobile Phone Mockup Vectors by Vecteezy</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: #0f0f0f;
  padding: 4rem 2rem;
  color: $secondaryColorLight;

  a {
    display: inline;
  }
}

.color-text.big {
  font-size: 1.5rem;
}

.italic {
  font-style: italic;
}
.color-text {
  text-transform: uppercase;
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

@media (width >= 740px) {
  
}

@media (width >= 1024px) {
  section {
  padding-left: 10%;
  }
}
</style>
