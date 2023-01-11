<template>
    <div class="posts" v-if="posts.length > 0">
        <div>
            <h3>Posts List</h3>
           
        </div>
        <transition-group name="my-list">
            <PostItem v-for='post in posts' :post="post" :key="post.id" @remove="$emit('remove', post)" />
        </transition-group>
    </div>
    <div v-else>
        Theres no posts.
    </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue"
export default {
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
}
</script>

<style scoped>
.posts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
}

.post {
    border: 2px solid teal;
    display: flex;
    gap: 20px;
    padding: 10px;
}

.my-list-enter-active,
.my-list-leave-active {
    transition: all 0.3s ease;
}

.my-list-enter-from,
.my-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.my-list-move {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>