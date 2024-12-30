import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/authSlice";
import recommendationSlice from "./slices/recommendationSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    recommendation: recommendationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
