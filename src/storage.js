import { reactive } from 'vue';

export const storage = reactive(
    {
        cardList: [],
        selectedArchetype: '',
        archetypesList: []
    }
);