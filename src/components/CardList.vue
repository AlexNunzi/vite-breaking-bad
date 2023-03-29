<template>
    <div class="bg-white p-3">
        <div>
            <p class="bg-black text-white m-0 p-2">Found N card</p>
            <div class="d-flex flex-wrap">
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
.ms_card{
    width: calc(100% / 5);
}
</style>