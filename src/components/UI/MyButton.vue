<template>
    <button>
        <slot>Default button</slot>
    </button>
</template>

<script>
export default {
    name: "my-button",
}
</script>

<style scoped>
button {
    height: 30px;
    width: 100px;
    border: 2px solid teal;
}
</style>