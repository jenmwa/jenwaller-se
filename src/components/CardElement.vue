<script>
export default {
  name: 'CardElement',
  props: ['cardData'],
  data() {
    return {}
  }
}
</script>

<template>
  <article>
  <div class="card">
    <img :src="cardData.image.img" :alt="cardData.image.alt" class="card-img-top portfolio-card__image">
      <div class="card-body">
        <h6 v-html="cardData.category" class="card-subtitle portfolio-card__category"></h6>
        <h4 v-html="cardData.project" class="card-title mb-2 portfolio-card__title"></h4>
        <p v-html="cardData.description" class="card-text portfolio-card__text"></p>
        <div class="tech-stach">
          <span class="portfolio-card__tech portfolio-card__tech__javascript">JAVASCRIPT</span>
          <span class="portfolio-card__tech portfolio-card__tech__vue">VUE</span>
          <span class="portfolio-card__tech portfolio-card__tech__html">HTML</span>
          <span class="portfolio-card__tech portfolio-card__tech__css">(s)css</span>
        </div>
        <a class="card-link portfolio-card__link">Link to Github</a>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
  </div>
</article>
</template>

<style lang="scss">

h4 {
  font-family: $secondaryFont;
  color: $tertiaryColorLight;
}
.card {
  max-width: 100%;
  padding: 2rem;
  margin: 2rem;
  background-color: black;
  border-radius: 0px 50px;
  box-shadow: -2px 1px 8px 1px lightgrey; 
  color: $tertiaryColorLight;
}

.portfolio-card__image {
  max-width: 100%;

  text-align: center;
  border-radius: 0px 25px;
}

.portfolio-card__title {
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
}

.portfolio-card__category {
  margin: 1rem 0 0 0;
  font-size: 1rem;
  text-transform: uppercase;
}

.portfolio-card__category {
  color: $accessoryColor2;
}

.portfolio-card__text {
  font-size: 1rem;
}

.portfolio-card__tech {
  color: $tertiaryColorLight;
  text-transform: uppercase;
  padding: 6px;
  margin: 0 1rem 1rem 0;
}

.portfolio-card__tech__html {
  background-color: $primaryColorDark;
}

.portfolio-card__tech__css {
  background-color: #143353;
}

.portfolio-card__tech__javascript {
  background-color: $tertiaryColorDark;
}

.portfolio-card__tech__vue {
  background-color: $secondaryColorDark;
}

.portfolio-card__link {
  text-transform: uppercase;
  font-size: 0.8rem;
  color: $accessoryColor;
  text-decoration: underline;
  transition: 0.3s;
}

.tech-stach {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>