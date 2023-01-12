import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import AboutPage from "@/pages/AboutPage"
import SinglePostPage from "@/pages/SinglePostPage"
import StorePostsPage from "@/pages/StorePostsPage"
import { createRouter, createWebHistory } from "vue-router";

const routes = [{
    path: "/",
    component: MainPage,
},
{
    path: "/posts",
    component: PostsPage,
},
{
    path: "/about",
    component: AboutPage,
},
{
    path: "/posts/:id",
    component: SinglePostPage,
},
{
    path: "/store",
    component: StorePostsPage,
}
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;