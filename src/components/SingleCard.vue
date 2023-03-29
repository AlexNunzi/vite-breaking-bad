<template>

    <div class="card border-0 rounded-0">
    <img :src="image" class="card-img-top w-100" :alt="name">
    <div class="card-body text-center d-flex flex-column justify-content-between">
      <h6 class="card-title text-white">{{ name.toUpperCase() }}</h6>
      <p class="card-text">{{ archetype }}</p>
    </div>
  </div>

</template>

<script>
export default {
    name: 'SingleCard',
    props: {
        image: String,
        name: String,
        archetype: String,
    }
}
</script>

<style scoped lang="scss">
@use '../styles/variables';

.card{
    background-color: variables.$primary-color;
}
</style>