<template>
<TheHeader />

<main class="p-3">
  <div class="container">
    <FilteringComp />
    <CardList />
  </div>

</main>

</template>

<script>
import TheHeader from './components/TheHeader.vue';
import FilteringComp from './components/FilteringComp.vue';
import CardList from './components/CardList.vue';

export default{
  components: {
        TheHeader,
        FilteringComp,
        CardList,
    }
}
</script>

<style lang="scss">
@use "./styles/general.scss";
</style>