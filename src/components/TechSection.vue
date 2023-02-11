<template>
  <section class="spikes"></section>
  <section class="skills">
    <div>
      <h3>Skills</h3>
      <!-- <p>What I have worked with and really enjoy:</p> -->
      <div class="flex">
        <div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>JAVASCRIPT</li>
            <li>VUE</li>
            <li>VITE</li>
            <li>VS CODE</li>
            <li>GITHUB</li>
            <li>ADOBE<br>(Photoshop, Illustrator, InDesign, AfterEffects)</li>
            <li>FIGMA</li>
          </ul>
          <p>also Parcel, Nodejs, Jest, Axios, Cypress.</p><br>
          <p>Before my LIA starts I will also have had courses in:</p>
          <ul>
            <li>REACT</li>
            <li>API developement & NODEjs</li>
            <li>Agile project Managment</li>
          </ul>
          <!-- <p>COURSES I've had at the Front End Developer YH at MedieInstitutet before LIA:</p> -->
        </div>
        <div>
        <p>Want to know more about me?</p>
        <p>Here you can download my CV, and if there's anything you want to ask me, Let's connect!</p>
        <p>My email adress is jenny.waller@medieinstitutet.se</p>
        <p>And you'll find me on LinkedIn here</p>
        I'm
        [img dummie of CV]<br>
        <button type="button" >Download CV</button>
        (or just open in a new window...)
      </div>
          <!-- <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Graphical tools for interface design</li>
            <li>Testing</li>
            <li>Work methodology for developers</li>
            <li>Agile project work</li>
            <li>API development</li>
            <li>UX/Usability</li>
          </ul> -->
      </div>
    </div>
  </section>
</template>
  
  <style scoped lang="scss">

  div {
    margin: 0;
    padding: 0;
  }

  .flex {
   padding: 0;
   margin: 0;
  }
.spikes {
  position: relative;
  background: $secondaryColorDark;
  transform: skewY(0deg);
  transform-origin: top right;
}

.spikes::after {
  content: '';
  position: absolute;
  right: 0;
  left: -0%;
  top: 100%;
  z-index: 10;
  display: block;
  height: 30px;
  background-size: 30px 100%;
  background-image: linear-gradient(135deg, #414E4C 25%, transparent 25%), linear-gradient(225deg, #414E4C 25%, transparent 25%);
  background-position: 0 0;
}

  section {
    background-color: rgb(15, 15, 15);
    color: $secondaryColorLight;

    div {
      padding: 2rem;
    }

    h3 {
    padding: 4rem 0 0 0;
    }

    ul {
      margin: 0;
      padding: 0;

    }
  }

  @media (width >= 740px) {
    .flex {
      display: flex;

    }
  }
  
  </style>