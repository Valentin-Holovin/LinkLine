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

            dispatch(setAccessToken(response.data.accessToken));
            dispatch(setRefreshToken(response.data.refreshToken));

            dispatch(setEmail(''))
            dispatch(setPassword(''))

            navigate(Routes.TABS);
            
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

export const fetchRegistration = createAsyncThunk(
  'auth/registration',
  async ({ email, password, name }: { email: string; password: string; name: string }, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await apiAuth.registration(email, password, name);
      if (response.status === 200) {
        AsyncStorage.setItem('accessToken', response.data.accessToken);
        AsyncStorage.setItem('refreshToken', response.data.refreshToken);

        dispatch(setAccessToken(response.data.accessToken));
        dispatch(setRefreshToken(response.data.refreshToken));

        dispatch(setEmail(''));
        dispatch(setPassword(''));
        dispatch(setName(''));

        navigate(Routes.TABS);

        return response.data;
      }
    } catch (error: any) {
      dispatch(setError(error.message || 'Error during registration'));
      Toast.show({
        type: 'error',
        text1: 'Error during registration',
        text2: error.message,
      });
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const fetchLogout = createAsyncThunk(
  'auth/logout',
  async (_, {getState, dispatch }) => {
    try {
      dispatch(setLoading(true));

      await apiAuth.logout();

      Toast.show({
        type: 'success',
        text1: 'Successful logout',
      });

      AsyncStorage.removeItem('accessToken');
      AsyncStorage.removeItem('refreshToken');

      dispatch(setAccessToken(null));
      dispatch(setRefreshToken(null));

      navigate(Routes.AUTH);
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Error during logout',
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
      setAccessToken: (state, action) => {
        state.accessToken = action.payload;
      },
      setRefreshToken: (state, action) => {
        state.refreshToken = action.payload;
      },
    },
});

export const { 
    setEmail, 
    setLoading, 
    setName, 
    setPassword,
    setError,
    setAccessToken,
    setRefreshToken
} = authSlice.actions

export default authSlice.reducer;