import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/search-slice";
import { apiSlice } from "./integrations";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;