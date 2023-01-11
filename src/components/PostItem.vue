<template>
    <div class="post">
        <div>
            {{ post.id }}
            <div class="post-title">Post title: {{ post.title }}</div>
            <div class="post-body">Post body: {{ post.body }}</div>
        </div>
        <div class="post-buttons">
            <my-button @click="$emit('remove', post)">Delete</my-button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>