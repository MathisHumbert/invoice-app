import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { UserFormInputs, UserSuccess, UserError } from '../../typing';

interface UserItem {
  user: string | null;
  token: string | null;
  isLoading: boolean;
  alertText: string;
  alertType: string;
}

const initialState: UserItem = {
  user: localStorage.getItem('user') || null,
  token: localStorage.getItem('token') || null,
  isLoading: false,
  alertText: '',
  alertType: '',
};

export const loginUser = createAsyncThunk<
  UserSuccess,
  UserFormInputs,
  { rejectValue: UserError }
>('user/loginUser', async (form: UserFormInputs, thunkApi) => {
  try {
    const { data } = await axios.post('/api/v1/auth/login', form);
    return data;
  } catch (error: any) {
    return thunkApi.rejectWithValue({ msg: error.response.data.msg });
  }
});

export const registerUser = createAsyncThunk<
  UserSuccess,
  UserFormInputs,
  { rejectValue: UserError }
>('user/registerUser', async (form: UserFormInputs, thunkApi) => {
  try {
    const { data } = await axios.post('/api/v1/auth/register', form);
    return data;
  } catch (error: any) {
    return thunkApi.rejectWithValue({ msg: error.response.data.msg });
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    // LOGIN
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      console.log('rejected', payload?.msg);
      state.isLoading = false;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
      state.user = payload.user;
      localStorage.setItem('token', payload.token);
      localStorage.setItem('user', payload.user);
    });
    // REGISTER
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      console.log('rejected', payload?.msg);
      state.isLoading = false;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
      state.user = payload.user;
      localStorage.setItem('token', payload.token);
      localStorage.setItem('user', payload.user);
    });
  },
});

export default userSlice.reducer;
export const { logoutUser } = userSlice.actions;
