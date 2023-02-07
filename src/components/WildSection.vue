<template>
  <section>
    <div class="words">
      <p class="meaning-of-life">Try and be nice to people, avoid eating fat, <br>read a good book every now and then,<br>get some walking in, <br>and try and live together in peace and harmony with people of all creeds and nations</p>
      <!-- <p class="wisdom">and for everybody's sake, KEEP IT SIMPLE!</p> -->
    </div>
  </section>
</template>
  
  <style scoped lang="scss">

  section {
    background-color:black;
    padding: 4rem 2rem;
  }
  
  div.words {
    text-align: right;
    background: none;
    height: 0; 
    height: auto;
    margin-right: 4rem;
    
   
  
    .meaning-of-life {
      font-size: 1.5rem;
      margin-left: auto;
      padding-left: 1rem;
      text-transform: none;
      font-family: $secondaryFont;
      font-style: italic;
      background: -webkit-linear-gradient(353deg, rgba(210, 0, 162, 0.4) 0%, rgba(245, 245, 245, 0.4) 44%, rgba(210, 0, 162, 0.4) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      
    }
    .wisdom {
        color: #dbdad4a7;
      }
  }
  
  </style>