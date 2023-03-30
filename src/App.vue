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
      this.storage.loadingArchetype = true;
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php?')
      .then(response => {
        this.storage.archetypesList = response.data;
        this.storage.loadingArchetype = false;
      }).catch(error => {
        this.archetypesList = [];
        this.storage.loadingArchetype = false;
      })
    },
    getCardsFromApi(){
      this.storage.loadingCards = true;
      let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0'
      
      if(this.storage.selectedArchetype != 0){
        urlApi += `&archetype=${this.storage.selectedArchetype}`;
      }
      axios.get(urlApi)
      .then(response => {
        this.storage.cardList = response.data;
        this.storage.loadingCards = false;
      }).catch(error => {
        this.storage.cardList = [];
        this.storage.loadingCards = false;
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