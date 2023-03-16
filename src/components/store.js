import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "hot-news",
  initialState: {
    articlesNum: 0,
    articles: [],
  },
  reducers: {
    set(state, action) {
      let temp = state.articles;
      state.articles = temp.concat(action.payload.articles);
      state.articlesNum = action.payload.num;
    },
    setNum(state, action) {
      state.articlesNum = action.payload.num;
    },
  },
});

const store = configureStore({
  reducer: {
    hotNews: slice.reducer,
  },
});


export default store;

export const actions = slice.actions;
