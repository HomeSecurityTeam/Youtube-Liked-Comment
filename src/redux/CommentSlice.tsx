import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YouTubeComment } from "../utility/type";

const initialCommentState: YouTubeComment[] = [];

export const commentSlice = createSlice({
  name: "comment",
  initialState: initialCommentState,
  reducers: {
    setComment: (state, action: PayloadAction<YouTubeComment>) => {
      const { author, likeCount, text, publishedAt } = action.payload;
      state.push({ author, likeCount, text, publishedAt });
    },
  },
});

export const { setComment } = commentSlice.actions;
export default commentSlice.reducer;
