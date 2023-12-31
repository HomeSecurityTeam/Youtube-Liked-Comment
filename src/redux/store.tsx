import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./VideoSlice";
import commentReducer from "./CommentSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage, // localStorage
  whitelist: ["video", "comment"], // 지속시킬 리듀서
};

const reducer = combineReducers({
  video: videoReducer,
  comment: commentReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// useAppSelector(리덕스에 작성한 변수 접근 조회), useAppDispatch(변수 업데이트)
