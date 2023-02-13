<template>
  <section class="portfolio" id="portfolio">
    <h3>Portfolio</h3>
    <div class="project-section">
      <CardElement
        v-for="(portfolioItem, index) in portfolioItems"
        :card-data="portfolioItem"
        :key="index"
        class="card-element"
      />
    </div>
  </section>
</template>

<script setup>
import CardElement from './CardElement.vue';
import portfolioItems from './PortfolioArray';
</script>

<style scoped lang="scss">
.portfolio {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/src/assets/img/backgroundImgx1024w.webp');
  width: 100%;
  background-repeat: no-repeat;
  background-color: black;
  color: $primaryColorLight;
  margin: 0;
}

div {
  h3 {
    margin-left: 2rem;
    padding: 4rem 0 2rem 0;
  }

  .card-element {
    margin: 2rem;
    transition: 0.1s ease-out;
    cursor: default;

    &:hover {
      scale: 1.05;
      transition: 0.4s ease-in;
      border: $accessoryColor2;
    }
  }
}

@media (width >= 740px) {
  .portfolio {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('/src/assets/img/backgroundImgx740w.webp');

    background-attachment: fixed;
    background-repeat: no-repeat;
  }
  .project-section {
    display: flex;
    flex-wrap: wrap;

    .card-element {
      margin: 2rem;
      width: 40%;
    }
  }
}

@media (width >= 1024px) {
  .portfolio {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('/src/assets/img/backgroundImgx1024w.webp');
    background-size: contain;
  }

  .project-section {
    //justify-content: center;

    .card-element {
      width: 33.33%;

      &:last-of-type {
        margin-bottom: 4rem;
      }
    }
  }
}
@media (width >= 1201px) {
  .project-section {
    .card-element {
      width: 25%;
    }
  }
}
</style>
