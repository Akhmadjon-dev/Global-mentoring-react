import { configureStore } from '@reduxjs/toolkit'

import moviesReducer from './movies/moviesSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunkMiddleware),
    devTools: true,
});


//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store as default };