<template>
  <section>
    <div class="words">
      <!-- <p class="meaning-of-life">Try and be nice to people, avoid eating fat, <br>read a good book every now and then,<br>get some walking in, <br>and try and live together in peace and harmony with people of all creeds and nations</p> -->
      <!-- <p class="wisdom">and for everybody's sake, KEEP IT SIMPLE!</p> -->
    </div>
    <div>
    <h3>About this site</h3>
    <p>I wanted to try out VUEjs for myself after our team assignment in the course Graphical tools for interface design. Really enjoy working with components and this suits me very well!
    And always good to practice start new project... (did I say that out loud?)</p>
    <p>Using Vite as a bundler, VUE with Javascript as my framework, packages as EsLint and prettier for linting and formatting, Sass as my stylesheet language.</p>
    <p>The design for this web is based on the hero background image from unsplash [insert link], and with that I decided my base dark/light colors and my colorful accessoryColors for details.</p>
    <p>I do really enjoy working with details, old school CSS animations, tryOut (for me), new, simple but effective ways of getting a site come to life.
    And since I really do enjoy small extras,  I've used some of VUE's builtin transition and of course, GSAP as animation tool!
    (Who doesnt like easter eggs?)</p>

    <p>and this is what came out.<br>
    simple onepager, simple design with simple graphics.
    Did I say simple?<br>
    KEEP IT SIMPLE is my motto and you always get something to go from and to develop.<br>

    both the site, you as a developer and of course, for the cause.</p>


    <p>Always learn.</p>

  </div>
   
  </section>
</template>
  
<style scoped lang="scss">

  section {
    background-color:black;
    padding: 4rem 2rem;
    color: $secondaryColorLight;
  }
  
  div.words {
    text-align: right;
    background: none;
    height: 0; 
    height: auto;
    margin-right: 4rem;
    
   
  
    // .meaning-of-life {
    //   font-size: 1.5rem;
    //   margin-left: auto;
    //   padding-left: 1rem;
    //   text-transform: none;
    //   font-family: $secondaryFont;
    //   font-style: italic;
    //   background: -webkit-linear-gradient(353deg, rgba(210, 0, 162, 0.4) 0%, rgba(245, 245, 245, 0.4) 44%, rgba(210, 0, 162, 0.4) 100%);
    //     -webkit-background-clip: text;
    //     -webkit-text-fill-color: transparent;
      
    // }
    // .wisdom {
    //     color: #dbdad4a7;
    //   }
  }
  
  </style>