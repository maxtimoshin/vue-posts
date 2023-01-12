<template>
    <div class="post">
        <div>
            №{{ post.id }}
            <div class="post-title">{{ post.title }}</div>
            <div class="post-body">{{ post.body }}</div>
        </div>
        <div class="post-buttons">
            <my-button @click="$router.push(`/posts/${post.id}`)">More</my-button>
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

<style scoped>
.post {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.post-title {
    font-weight: bold;
    font-size: 18px;
}

.post-buttons {
    display: flex;
    gap:10px;
}
</style>