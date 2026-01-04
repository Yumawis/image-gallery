import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { baseAPi } from "./baseApi";

const appReducer = combineReducers({
  [baseAPi.reducerPath]: baseAPi.reducer,
});

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPi.middleware),
});

setupListeners(store.dispatch);
