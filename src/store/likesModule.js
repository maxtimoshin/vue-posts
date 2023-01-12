export const likesModule = {
    state: () => ({
        likes: 1,
    }),
    mutations: {
        incrementLikes(state) {
            state.likes += 1;
        },
        decrementLikes(state) {
            state.likes -= 1;
        }
    }
}