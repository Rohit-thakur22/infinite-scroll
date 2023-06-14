import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRoboData = createAsyncThunk(
  "robo/getRoboData",
  async (params: any) => {
    const res = await axios.get(
      `https://dummyjson.com/comments?limit=${params.limit}`
    );
    const data = res.data;
    return data;
  }
);

export const sorting = createAsyncThunk(
  "robo/sorting",
  async (data: string) => {
    return data;
  }
);

const roboSlice = createSlice({
  name: "robo",
  initialState: { data: [], isLoading: false, sort: "", searching: "" },
  reducers: {
    sortedArray: (state) => {
      if (state.sort === "id-asc") {
        state.data.sort((a: any, b: any) => a.id - b.id);
      } else if (state.sort === "id-dsc") {
        state.data.sort((a: any, b: any) => b.id - a.id);
      }
    },
    searchingLogic: (state, { payload }) => {
      state.searching = payload;
      state.data = state.data.filter((item: any) => {
        return item?.user?.username
          ?.toLowerCase()
          .includes(state?.searching?.toLowerCase());
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoboData.fulfilled, (state, { payload }) => {
        state.data = payload?.comments;
        state.isLoading = false;
      })
      .addCase(getRoboData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoboData.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(sorting.fulfilled, (state, { payload }) => {
        state.sort = payload as unknown as string;
      });
  },
});

export default roboSlice.reducer;
export const { sortedArray, searchingLogic } = roboSlice.actions;
