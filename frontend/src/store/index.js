import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { baseAPi } from "./baseApi";

import authReducer from "./slices/authSlice";

const appReducer = combineReducers({
  [baseAPi.reducerPath]: baseAPi.reducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseAPi.middleware
    ),
});

setupListeners(store.dispatch);
