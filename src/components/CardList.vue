<template>
    <div class="ms_main-content bg-white ps-5 pt-5 pe-5">
        <div>
            <p class="bg-black text-white m-0 p-2">Found N card</p>
            <div id="cards-container" class="d-flex flex-wrap">
                <singleCard class="ms_card" v-for="card in storage.cardList.data"
                    
                    :image="card.card_images[0].image_url"
                    :name="card.name"
                    :archetype="card.archetype"
                />
            </div>
        </div>
    </div>
</template>

<script>
import SingleCard from './SingleCard.vue';
import {storage} from '../storage.js';
export default {
    name: 'CardList',
    components: {
        SingleCard,
    },
    data() {
        return{
            storage
        }
    }
}
</script>

<style scoped lang="scss">
.ms_card {
    width: 100%;
    margin-bottom: 0.5rem;
}

div.ms_main-content {
    padding-bottom: 2.5rem;
}

@media screen and (min-width: 768px){
    .ms_card {
        width: calc(100% / 3 - 1rem);
        margin: 0 0.5rem 0.5rem 0.5rem;
    }

    #cards-container {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    }
}

@media screen and (min-width: 992px){
    .ms_card {
        width: calc(100% / 5 - 1rem);
    }
}

@media screen and (min-width: 1200px){
    .ms_card {
        width: calc(100% / 7 - 1rem);
    }
}
</style>