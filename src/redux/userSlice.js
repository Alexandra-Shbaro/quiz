import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  totalPoints: 0,
  username: '',
  takenQuizzes: [], 
  quizPoints: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
    },
    logout: (state) => {
        state.isLoggedIn = false;
        state.username = null;
        state.totalPoints = 0;
        state.takenQuizzes = []; 
        state.quizPoints = {}; 
    },
    addPoints: (state, action) => {
      state.totalPoints += action.payload;
    },
  },
});

export const { login, logout, addPoints } = userSlice.actions;
export default userSlice.reducer;
