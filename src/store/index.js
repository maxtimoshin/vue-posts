import { createStore } from "vuex"
import { likesModule } from "./likesModule"
import { PostModule } from "./postModule"

export default createStore({
    modules: {
        postModule: PostModule,
        likesModule: likesModule,
    },
    state: {
    
    },
})
