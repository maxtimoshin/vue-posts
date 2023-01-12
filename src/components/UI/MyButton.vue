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
    width: fit-content;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid teal;
    cursor:pointer;
    transition:all 0.3s;
    border-radius: 5px;
}
button:hover {
    background:teal;
    color:#fff;
}
</style>