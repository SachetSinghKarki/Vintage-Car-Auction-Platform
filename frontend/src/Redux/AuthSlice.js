// import { createSlice } from "@reduxjs/toolkit";

// const initialState= {
//     loading:null,
//     error:null,
//     user:null
// }

// const AuthSlice = createSlice ({
//     name: 'authSlice',
//     initialState:initialState,
//     reducers: {
//         SerUser:(state,action)=> {
//         state.user = action.payload;
//         }
//         // loginStart: (state) => {
//         //     state.loading = true;
//         //     state.error = null;
//         // },
//         // loginSuccess: (state, action) => {
//         //     state.loading = false;
//         //     state.user = action.payload;
//         // },
//         // loginFailure: (state, action) => {
//         //     state.loading = false;
//         //     state.error = action.payload;
//         // },
//         // logout: (state) => {
//         //     state.user = null;
//         // },
//     },
// })

// export const {SetUser} = AuthSlice.actions;
// export default AuthSlice.reducer

// AuthSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//     // Other reducers can be added here
//   },
// });

// export const { setUser } = authSlice.actions; // Correct export
// export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null; // Clear user on logout
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;