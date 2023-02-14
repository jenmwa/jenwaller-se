<template>
  <article>
    <div class="card">
      <div>
        <img
          :src="cardData.image.img"
          :alt="cardData.image.alt"
          class="card-img-top portfolio-card_image"
          width="236"
          height="153"
          loading="lazy"
        />

        <p v-html="cardData.category" class="card-subtitle portfolio-card_category"></p>
        <h4 v-html="cardData.project" class="card-title portfolio-card_title"></h4>
        <p v-html="cardData.description" class="card-text portfolio-card_text"></p>

        <div class="tech-stach">
          <span v-html="cardData.frame" class="portfolio-card_tech portfolio-card_tech_framework"></span>
          <span v-html="cardData.lang" class="portfolio-card_tech portfolio-card_tech_lang"></span>
          <span v-html="cardData.scss" class="portfolio-card_tech portfolio-card_tech_css"></span>
          <span v-html="cardData.extra" class="portfolio-card_tech portfolio-card_tech_extra"></span>
        </div>
      </div>
      <div>
        <div>
          <a :href="cardData.website" target="_blank" class="card-link portfolio-card_link">website</a>
          <a :href="cardData.github" target="_blank" class="card-link portfolio-card_link">Github repo</a>
        </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.portfolio-card_image {
  width: 100%;
  text-align: center;
  border-radius: 0px 25px;
  object-fit: cover;
}

.portfolio-card_title {
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
}

.portfolio-card_category {
  margin: 1rem 0 0 0;
  font-size: 1rem;
  text-transform: uppercase;
}

.portfolio-card_category {
  color: $accessoryColor;
}

.portfolio-card_text {
  font-size: 1rem;
}

.portfolio-card_tech {
  border-radius: 8px;
  color: $tertiaryColorLight;
  text-transform: uppercase;
  padding: 6px;
  margin: 0 0.75rem 1rem 0;

  &:empty {
    display: none;
  }
}

.portfolio-card_tech_extra {
  background-color: $primaryColorDark;
}

.portfolio-card_tech_css {
  background-color: #143353;
}

.portfolio-card_tech_framework {
  background-color: $tertiaryColorDark;
}

.portfolio-card_tech_lang {
  background-color: $secondaryColorDark;
}

.portfolio-card_link {
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
