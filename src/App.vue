<template>
<TheHeader title="Yu-Gi-Ho Api"/>

<main class="p-3">
  <div class="container">
    <FilteringComp />
    <CardList />
  </div>

</main>

</template>

<script>
import axios from 'axios';

import { storage } from './storage.js'

import TheHeader from './components/TheHeader.vue';
import FilteringComp from './components/FilteringComp.vue';
import CardList from './components/CardList.vue';

export default{
  components: {
        TheHeader,
        FilteringComp,
        CardList,
    },
  data() {
    return {
      storage
    }
  },
  methods: {
    getCardsFromApi(){
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
      .then(response => {
        this.storage.cardList = response.data;
        // console.log(this.storage.cardList.data[0].name)
      })
    }
  },
  created() {
    this.getCardsFromApi();
  }
}
</script>

<style lang="scss">
@use "./styles/general.scss";
</style>