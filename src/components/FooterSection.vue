<template>
  <div>
    <p>&copy;</p>
    <a href="mailto:jen@jenwaller.se" target="_blank">Jen Waller</a> 2023
  </div>
</template>

<style scoped lang="scss">
div {
  background-color: $accessoryColor;
  text-align: center;
  padding: 0.5rem;

  p {
    display: inline;
  }

  a {
    display: inline;
    color: $primaryColorDark;

    &:hover {
      color: $tertiaryColorDark;
      font-weight: bold;
    }
  }
}
</style>
