<template>
    <div class="bg-white p-3">
        <div>
            <p class="bg-black text-white m-0 p-2">Found N card</p>
            <div>
                <singleCard />
            </div>
        </div>
    </div>
</template>

<script>
import SingleCard from './SingleCard.vue';

export default {
    name: 'CardList',
    components: {
        SingleCard,
    }
}
</script>

<style scoped lang="scss">

</style>