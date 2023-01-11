import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        component: MainPage,
    },
    {
        path: "/posts",
        component: PostsPage,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;