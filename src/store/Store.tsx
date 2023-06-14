import { configureStore } from "@reduxjs/toolkit";
import roboSlice from "./robo-list";
export const store = configureStore({
  reducer: {
    roboSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
