<template>

    <div class="p-3">
        <select class="form-select w-auto" aria-label="Default select example">
            <option selected>Select an option</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
</template>

<script>
export default{
    name: 'FilteringComp',
}

</script>

<style scoped lang="scss">
select {
    max-width: 12rem;
}

</style>