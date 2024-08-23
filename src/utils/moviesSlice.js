import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies : null,
        nowPlayingMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
        trailerVideo : null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
          state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
          state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state, action) => {
          state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
          state.upcomingMovies = action.payload;
        },
    },

});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;