import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appwriteService from "../appwrite/config";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPots",
  async (_, { rejectWithValue }) => {
    try {
      const posts = await appwriteService.getPosts();
      return posts.documents;
    } catch (error) {
      return rejectWithValue("Failed to fetch posts");
    }
  }
);

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Reset error
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload; // Store fetched posts in state
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Store the error message in state
      });
  },
});

export default postSlice.reducer;
