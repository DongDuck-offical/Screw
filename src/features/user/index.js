import { createSlice } from '@reduxjs/toolkit';
import { logout } from './asyncActions';

export const initialState = {
  accessToken: localStorage.getItem('accessToken'),
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;

      localStorage.setItem('accessToken', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fullfilled, (state) => {
      state.accessToken = null;
      state.id = null;
      localStorage.setItem('accessToken');
    });
  },
});

export default userSlice.reducer;
