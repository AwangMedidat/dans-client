import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: null,
    jobDetail: null,
    loading: false,
  },

  reducers: {
    jobsStart(state) {
      state.loading = true;
      state.jobs = null;
    },
    jobsSuccess(state, action) {
      state.loading = false;
      state.jobs = action.payload;
    },
    jobsFailure(state) {
      state.loading = false;
      state.jobs = null;
    },
    jobDetailStart(state) {
      state.jobDetail = null;
    },
    jobDetailSuccess(state, action) {
      state.jobDetail = action.payload;
    },
    jobDetailFailure(state) {
      state.jobDetail = null;
    },
  },
});

export const {
  jobsStart,
  jobsSuccess,
  jobsFailure,
  jobDetailFailure,
  jobDetailStart,
  jobDetailSuccess,
} = jobSlice.actions;

export default jobSlice.reducer;
