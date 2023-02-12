<template>
  <nav class="base">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/jenny-waller/" target="_blank"
        ><img class="icons" src="/linkedin-fill-svgrepo-com.svg" alt="linkedIn symbol logo" width="35" height="35"
      /></a>
      <a href="https://github.com/jenmwa" target="_blank"><img class="icons" src="/github-svgrepo-com.svg" alt="Github symbol logo" width="35" height="35" /></a>
    </div>
    <!--<span class="material-symbols-outlined">light_mode</span>-->
  </nav>
</template>

<script lang="js">
export default {};
</script>

<style scoped lang="scss">
.base {
  margin: 0;
  background-color: rgba(10, 10, 10, 0.80);
  border-radius: 0 0 50% 50%;
  position: absolute;
  width: 100%;
  top: 3rem;
  right: 1rem; 
  text-align: center;

  li {
    list-style: none;
    line-height: 3rem;
  }

  a {
    display: inline;
  }

  div.social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 3rem 0;

    img {
      width: 35px;
      filter: invert(72%) sepia(82%) saturate(366%) hue-rotate(330deg) brightness(98%) contrast(92%);
      transition: transform 500ms;
      transition-timing-function: cubic-bezier(0.75, -3, 0.25, 4);

      &:hover {
        filter: invert(22%) sepia(95%) saturate(2648%) hue-rotate(307deg) brightness(83%) contrast(95%);
        transform: scale(1.1);
        transition: 0.4s ease-in;
      }
    }
  }
}
</style>
