<template>
    <div class="text-center">
        <font-awesome-icon class="loading fs-1" icon="fa-solid fa-spinner" />
    </div>
</template>

<script>
export default{
    name: 'LoadingComp',
}
</script>

<style>
    .loading{
        animation: rotation infinite 2s linear;
    }

    @keyframes rotation {
        100% {
            transform: rotate(360deg);
            }
    }
</style>