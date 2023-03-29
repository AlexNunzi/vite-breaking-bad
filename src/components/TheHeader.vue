<template>
    <header class="">
        <div class="container-fluid d-flex align-center">
            <img id="logo" class="me-3" src="/logo.png" alt="Yu-Gi-Oh logo">
            <h1>{{ title }}</h1>
        </div>
    </header>
</template>


<script>
export default{
    name: 'TheHeader',
    props: {
        title: String,
    }
}
</script>


<style scoped lang="scss">
#logo {
    height: 3rem;
}
</style>