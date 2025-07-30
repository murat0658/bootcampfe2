import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  posts: [],
  value: 0,
  loading: false,
};

const reducerKey = "posts";

export const getPostsAction = createAsyncThunk(
  reducerKey + "/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response?.data;
    } catch ({ response, message, status }) {
      rejectWithValue({
        data: response?.data,
        status: status,
        message,
      });
    }
  }
);

const counterSlice = createSlice({
  name: reducerKey,
  initialState,
  reducers: {
    incrementOne: (state) => {
      state.value++;
    },
    decrementOne: (state) => {
      state.value--;
    },
    increment: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPostsAction.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(getPostsAction.rejected, (state, action) => {
      state.posts = [];
      state.loading = false;
    });
  },
});

export const postsReducer = counterSlice.reducer;
export const { incrementOne, decrementOne, increment } = counterSlice.actions;

export const selector = (state) => state.posts;
