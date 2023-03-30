<template>

    <div class="p-3">
        <select @change="$emit('selectArchetype')" class="form-select w-auto" aria-label="Default select example" v-model="storage.selectedArchetype">
            <option value="0" selected>All archetype</option>
            <option v-for="archetype in storage.archetypesList" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<script>
import { storage } from '../storage.js';
export default{
    name: 'FilteringComp',
    data() {
        return {
            storage,
        }
    }
}

</script>

<style scoped lang="scss">
select {
    max-width: 12rem;
}

</style>