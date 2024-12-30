import { API_URL } from "@/endpoints/endpoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IRecommendationState {
  loading: boolean;
  recommendation: string | null;
  error: string | null;
}

const initialState: IRecommendationState = {
  loading: false,
  recommendation: null,
  error: null,
};

export const fetchRecommendation = createAsyncThunk(
  "recommendations/fetchRecommendation",
  async (payload: { userId: string; topic: string }) => {
    const response = await axios.get(
      `${API_URL}/recommendations/recommendations/`,
      { params: { user_id: payload.userId, topic: payload.topic } }
    );
    return response.data.recommendation;
  }
);

const recommendationSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecommendation.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchRecommendation.fulfilled, (state, action) => {
      state.loading = false;
      state.recommendation = action.payload;
    });
    builder.addCase(fetchRecommendation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch recommendation";
    });
  },
});
export default recommendationSlice.reducer;
