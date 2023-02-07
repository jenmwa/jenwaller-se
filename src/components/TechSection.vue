<template>
  <section class="spikes"></section>
  <section>
    <div>
      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>JAVASCRIPT</li>
        <li>VUE</li>
        <li>GITHUB</li>
        <li>VITE</li>
        <li>ADOBE (psd, illustrator, inDesign, AfterEffects)</li>
        <li>FIGMA</li>
      </ul>
      and to mention: Parcel, Nodejs, React, Jest, Axios, Cypress. 
    </div>
    <div>  
      COURSES within the Front End Developer YH at MedieInstitutet:<br>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Graphical tools for interface design</li>
        <li>Testing</li>
        <li>Work methodology for developers</li>
        <li>Agile project work</li>
        <li>API development</li>
        <li>UX/Usability</li>
      </ul>
    </div>
    <div>
      Want to know more?<br>
      [img dummie of CV]<br>
      <button type="button" >Download CV</button>
      (or just open in a new window...)
    </div>
  </section>
</template>
  
  <style scoped lang="scss">
.spikes {
  position: relative;
  background: $secondaryColorDark;
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
    color: $tertiaryColorLight;
    margin-top: -1rem;
    font-size: 3rem;
    font-family: $secondaryFont;
    text-shadow: 1px 1px 1px $tertiaryColorDark;
    }

    ul {
      margin: 0;
      padding: 0;

    }
  }
  
  button {
    text-transform: uppercase;
    margin: 1rem 0;
    display: block;
    background-color: $accessoryColor;
    transition: transform 500ms;
    transition-timing-function: cubic-bezier(.75, -3, .25, 4);

    &:hover {
      background-color: $accessoryColor2;
      transform: scale(1.1);
      transition: .4s ease-in;
      color: $primaryColorLight;
    }
  }


  </style>