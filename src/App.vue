<template>
<TheHeader title="Yu-Gi-Ho Api"/>

<main class="p-3">
  <div class="container">
    <FilteringComp @selectArchetype="getCardsFromApi"/>
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
    getAllArchetypes(){
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php?')
      .then(response => {
        this.storage.archetypesList = response.data;
      })
    },
    getCardsFromApi(){
      let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0'
      
      if(this.storage.selectedArchetype != 0){
        urlApi += `&archetype=${this.storage.selectedArchetype}`;
      }
      axios.get(urlApi)
      .then(response => {
        this.storage.cardList = response.data;
      })
    }
  },
  created() {
    this.getCardsFromApi();
    this.getAllArchetypes();
  }
}
</script>

<style lang="scss">
@use "./styles/general.scss";
</style>