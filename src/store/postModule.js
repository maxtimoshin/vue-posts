export const PostModule = {
    state: () => ({
        posts: [],
        isDialogVisible: false,
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        currentPage: 1,
        limitPerPage: 10,
        totalPages: 0,
        sortOptions: [
            { value: 'title', name: 'Sort by name' },
            { value: 'body', name: 'Sort by content' }
        ]
    }),
    getters: {

    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
    },
    actions: {

    }
}