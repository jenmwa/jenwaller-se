<template>
  <article>
  <div class="card">

      <img :src="cardData.image.img" :alt="cardData.image.alt" class="card-img-top portfolio-card__image"
        width="236"
        height="153"
        loading="lazy">
          
      <p v-html="cardData.category" class="card-subtitle portfolio-card__category"></p>
      <h4 v-html="cardData.project" class="card-title mb-2 portfolio-card__title"></h4>
      <p v-html="cardData.description" class="card-text portfolio-card__text"></p>
      
      
        <div class="tech-stach">
          <span v-html="cardData.frame" class="portfolio-card__tech portfolio-card__tech__framework"></span>
          <span v-html="cardData.lang" class="portfolio-card__tech portfolio-card__tech__lang"></span>
          <span v-html="cardData.scss" class="portfolio-card__tech portfolio-card__tech__css"></span>
          <span v-html="cardData.extra" class="portfolio-card__tech portfolio-card__tech__extra"></span>
        </div>

      <div>
          <a :href="cardData.website" target="_blank" class="card-link portfolio-card__link">website</a>
          <a :href="cardData.github" target="_blank" class="card-link portfolio-card__link">Github repo</a>
      </div>


    </div>

</article>
</template>

<script lang="js">
export default {
  name: 'CardElement',
  props: ['cardData'],
  data() {
    return {}
  }
}
</script>

<style lang="scss">

h4 {
  font-family: $secondaryFont;
  color: $tertiaryColorLight;
}

a {
  display: block;
  margin-bottom: 1rem;
}

.card {
  padding: 2rem;
  background-color: #0f0f0f;
  border-radius: 0px 50px;
  box-shadow: -2px 1px 8px 1px lightgrey; 
  color: $tertiaryColorLight;
  max-width: 300px;
}

.portfolio-card__image {
  width: 100%;
  text-align: center;
  border-radius: 0px 25px;
  object-fit: cover;
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
  color: $accessoryColor;
}

.portfolio-card__text {
  font-size: 1rem;
}

.portfolio-card__tech {
  border-radius: 8px;
  color: $tertiaryColorLight;
  text-transform: uppercase;
  padding: 6px;
  margin: 0 0.75rem 1rem 0;

  &:empty {
    display:none;
  }
}

.portfolio-card__tech__extra {
  background-color: $primaryColorDark;
}

.portfolio-card__tech__css {
  background-color: #143353;
}

.portfolio-card__tech__framework {
  background-color: $tertiaryColorDark;
}

.portfolio-card__tech__lang {
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

@media (width >= 740px) {

.card {
  height: 550px;
  }
}

@media (width >= 1024px) {

  .card {
    height: 600px;
  }
}

</style>