<template>
  <section class="spikes"></section>
  <section class="skills" id="skills">
    <h3>Skills</h3>
    <div class="flex">
      <div class="children">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JAVASCRIPT</li>
          <li>VUE</li>
          <li>VITE</li>
          <li>VS CODE</li>
          <li>GITHUB</li>
          <li>ADOBE<br />(Photoshop, Illustrator, InDesign, AfterEffects)</li>
          <li>FIGMA</li>
        </ul>
        <p>also Parcel, Nodejs, Jest, Axios, Cypress.</p>
        <br />
        <p>Before my LIA starts I will also have had courses in:</p>
        <ul>
          <li>REACT</li>
          <li>API developement & NODEjs</li>
          <li>Agile project Managment</li>
        </ul>
      </div>

      <div class="children section-middle">
        <h4>My CV</h4>
        <p>(opens in a new window)</p>
        <div class="img-container">
          <a href="./jenny-waller_cv-eng.pdf" target="_blank" >
            <img :src="cvImage" width="200" height="300" loading="lazy" alt="Jenny wallers CV i litet format" />
          </a>
          <span class="download-text">DOWNLOAD</span>
          <a href="./jenny-waller_cv-eng.pdf" download=”jenny-waller_cv-eng” rel="noopener noreferrer">ENG</a>
          <a href="./jenny-waller_cv-sv.pdf" download="jenny-waller-cv-swe" rel="noopener noreferrer">SWE</a>
          <p class="end-words">If there's something you want to ask me,<br />(or just say HI 👋), send me a message!</p>
          <p>
            My email adress is
            <a href="mailto:jenny.waller@medieinstitutet.se" target="_blank">jenny.waller@medieinstitutet.se</a>
          </p>
          <p>
            And you'll find me on <a href="https://www.linkedin.com/in/jenny-waller/" target="_blank">LinkedIn here</a>
          </p>
        </div>
      </div>

      <div class="children">
        <!-- <button type="button" >Download CV</button> -->
        <span class="material-symbols-outlined rocket"> rocket_launch </span>
      </div>
    </div>
  </section>
</template>

<script setup>
  import cvImage from '/jenny-waller-cv-lia-eng.webp'; 
</script>

<style scoped lang="scss">
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
  background-image: linear-gradient(135deg, #414e4c 25%, transparent 25%),
    linear-gradient(225deg, #414e4c 25%, transparent 25%);
  background-position: 0 0;
}

.skills {
  padding-left: 2rem;
  padding-right: 1rem;
  background-color: #0f0f0f;
  color: $secondaryColorLight;
}

.flex {
  padding: 0 0 4rem 0;
}

h3,
h4 {
  padding-top: 4rem;
  margin: 0;
}

img {
  margin: 0.5rem 0 2rem 0;
  transition: transform 500ms;
  transition-timing-function: cubic-bezier(0.75, -3, 0.25, 4);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.4s ease-in;
  }
}

.download-text {
  display: block;
}

a {
  display: inline;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
}
.end-words {
  margin-top: 4rem;
}

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
.rocket {
  display: block;
  font-size: 4rem;
  margin-top: 2rem;
}

@media (width >= 740px) {
  .flex {
    display: flex;
  }

  .children:first-of-type {
    padding-right: 2rem;
  }
  .top-section {
    margin-right: 2rem;
  }
  h3 {
    width: 50%;
  }
  h4 {
    padding-top: 0;
    position: relative;
    margin-top: -4.5rem;
  }
}
.rocket {
  display: none;
}

@media (width >= 1024px) {
  .flex {
    display: flex;
    align-items: end;
    flex-wrap: wrap;
    width: 100%;
  }

  .children {
    flex: 40%;
  }

  .skills {
    padding-left: 10%;
  }

  .top-section {
    margin-right: 6rem;
  }
}

@media (width >= 1200px) {

  .children {
    margin-right: 0;
    flex: 25%;

    .section-middle {
      margin-left: 2rem;
    }

  }
  .rocket {
    display: block;
    font-size: 8rem;
    margin-bottom: 5rem;
  }
}
</style>
