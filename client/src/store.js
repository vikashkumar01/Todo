import { configureStore } from "@reduxjs/toolkit"
import { userReducer, getTodosReducer } from "./Reducers/User"


const store = configureStore({
    reducer: {
        user: userReducer,
        getTodos: getTodosReducer,

    },
})

export default store;