<template>
  <div class="words">
    <p class="meaning-of-life">Try and be nice to people, avoid eating fat, <br>read a good book every now and then,<br>get some walking in, <br>and try and live together in peace and harmony with people of all creeds and nations</p>
    <p>and for everybody's sake, KEEP IT SIMPLE!</p>
  </div>
</template>
  
  <style scoped lang="scss">
  
  div {
    border: 2px solid $secondaryColorDark; 
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
  
  </style>