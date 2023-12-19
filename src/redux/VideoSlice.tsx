import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YouTubeVideo, YouTubeComment } from "../utility/type";

const initialVideoState: YouTubeVideo = {
  id: "",
  title: "",
  description: "",
  publishedAt: "",
  thumbnailUrl: "",
  viewCount: 0,
  likeCount: 0,
  commentCount: 0,
};

const initialCommentState: YouTubeComment = {
  author: "",
  likeCount: 0,
  text: "",
  publishedAt: "",
};

export const videoSlice = createSlice({
  name: "video",
  initialState: initialVideoState,
  reducers: {
    setVideo: (state, action: PayloadAction<YouTubeVideo>) => {
      const {
        id,
        title,
        description,
        publishedAt,
        thumbnailUrl,
        viewCount,
        likeCount,
        commentCount,
      } = action.payload;
      state.id = id;
      state.title = title;
      state.description = description;
      state.publishedAt = publishedAt;
      state.thumbnailUrl = thumbnailUrl;
      state.viewCount = viewCount;
      state.likeCount = likeCount;
      state.commentCount = commentCount;
    },
  },
});

export const commentsSlice = createSlice({
  name: "comments",
  initialState: initialCommentState,
  reducers: {
    setComments: (state, action: PayloadAction<YouTubeComment>) => {
      const { author, likeCount, text, publishedAt } = action.payload;
      state.author = author;
      state.likeCount = likeCount;
    },
  },
});
export const { setVideo } = videoSlice.actions;
export default videoSlice.reducer;
