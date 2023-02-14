<template>
  <section>
    <div class="upper-container">
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
      <!-- <p>
        The design for this site is based on the hero background image by Greg Rakozy from
        <a href="https://unsplash.com/photos/oMpAz-DN-9I" target="_blank">unsplash</a>, and with that I
         decided my base
        with dark and light colors and my and two different accessory colors for details. 
      </p> -->
      <p>
        I do really enjoy working with details, old school CSS animations, and with VUE, new, but simple effective ways
        of getting a site come to life.
        <!-- And since I really do enjoy small extras, I've used
        <span class="color-text">GSAP</span> for some animations as well...
        <span class="italic">(Who doesn't like easter eggs?)</span> -->
      </p>

      <p>
        And this is what came out.<br />
        A onepager, classic portfolio design and the graphic element is based on the hero image. And with a lot of CSS, details
        and something I really enjoyed create!
        <br /><br />
        KEEP IT SIMPLE and always live to learn!<br />
      </p>
    </div>
    <div class="cred">
      <h4>Inspiration:</h4>
      Image by <a href="https://unsplash.com/photos/oMpAz-DN-9I" target="_blank">Greg Rakozy from Unsplash</a><br>
      BurgerMenu by <a href="https://codepen.io/kkern/pen/OYERMy" target="_blank">Kevin Regenrek at Codepen</a><br>
      Hero section by <a href="http://vue.rainbowit.net/designer-portfolio" target="_blank">Rainbow-themes, TryDo</a><br>
      CardElement by <a href="https://codepen.io/jacklegge/pen/EMdXQm" target="_blank">Jack Legge at Codepen</a><br>
      Fonts Pairing by <a href="https://instagram.com/supercharge.design" target="_blank">supercharge.design at instagram</a><br>
      Css tricks by <a href="</a>" target="_blank">baby_wolf_codes at Instagram</a><br>
      Laptop & phone mockup by <a href="https://www.vecteezy.com/free-vector" target="_blank">vecteezy.com</a>
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

.cred {
  line-height: 2rem;
}

@media (width >= 740px) {
  section {
    display: flex;
    align-items: end;

    .upper-container {
      max-width: 50%;
      margin-right: 2rem;
    }

    .upper-container > h3 {
      width: 100%;
    }

    p:last-of-type {
      margin-bottom: 0;
    }

    h3 {
      width: 50%;
    }
   
  }
}

@media (width >= 1024px) {
  section {
  padding-left: 10%;

  .upper-container {
    max-width: 40%;
      margin-right: 8rem;
    }

  }
}
</style>
