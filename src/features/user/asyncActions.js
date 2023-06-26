import { createAsyncThunk } from '@reduxjs/toolkit';
import backend from '@backend';

export const logout = createAsyncThunk('user/logout', async () => {
  const response = await backend.get(`/auth/signout`, {
    withCredentials: true,
  });

  localStorage.removeItem('accessToken');

  return response.data;
});
