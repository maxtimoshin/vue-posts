<template>
    <div class="navbar">
        <my-button @click="$router.push('/')">Main page</my-button>
        <my-button @click="$router.push('/about')">About</my-button>
        <my-button @click="$router.push('/posts')">Posts</my-button>
        <my-button @click="$router.push('/store')">Store</my-button>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .navbar {
        display: flex;
        height: 50px;
        border:1px solid teal;
        padding:10px;
        gap:10px;
    }
</style>