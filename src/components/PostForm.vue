<template>
    <form @submit.prevent>
        <h4>Post creation</h4>
        <my-input type="text" v-model="inputValue.title" placeholder="Post title" />
        <my-input type="text" v-model="inputValue.body" placeholder="Post description" />
        <my-button @click="createPost">Create post</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            inputValue: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.inputValue.id = Date.now()
            this.$emit('create', this.inputValue)
            this.inputValue = {
                title: '',
                body: '',
            }
        },
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 30%;
    padding: 10px;
}
</style>