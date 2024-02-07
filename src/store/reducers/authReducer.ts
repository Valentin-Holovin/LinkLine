import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiAuth } from '../../api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../../navigation/NavigationService'
import { Routes } from '../../navigation/Routes'
import Toast from 'react-native-toast-message'

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
  email?: string,
  name?: string,
  password?: string,
}
  
const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
  email: '',
  name: '',
  password: '',
}

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }: { email: string; password: string }, {getState, dispatch }) => {
      try {
        dispatch(setLoading(true));
        const response = await apiAuth.login(email, password);
        if (response.status === 200) {
          AsyncStorage.setItem('accessToken', response.data.accessToken);
          AsyncStorage.setItem('refreshToken', response.data.refreshToken);
          navigate(Routes.TABS);
          dispatch(setEmail(''))
          dispatch(setPassword(''))
          return response.data;
        }
      } catch (error: any) {
        dispatch(setError(error.message || 'Error during login'));
        Toast.show({
          type: 'error',
          text1: 'Error during login',
          text2: error.message
        });
      } finally {
        dispatch(setLoading(false));
      }
      }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setEmail: (state, action) => {
        state.email = action.payload;
      },
      setName: (state, action) => {
        state.name = action.payload;
      },
      setPassword: (state, action) => {
        state.password = action.payload;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
        state.error = null;
      },
      setError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
    },
});

export const { 
    setEmail, 
    setLoading, 
    setName, 
    setPassword,
    setError,
} = authSlice.actions

export default authSlice.reducer;