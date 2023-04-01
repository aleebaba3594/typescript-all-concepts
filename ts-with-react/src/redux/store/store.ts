import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../slices/UserSlices'
import counterReducer from '../slices/CounterSlices'


export const store = configureStore({
    reducer: {
        // register your reducers here
        users: usersReducer,
        counter: counterReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>