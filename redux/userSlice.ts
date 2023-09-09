// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';  // import RootState from store.ts
import { SerializableUser } from '../types';  // use SerializableUser instead of ExtendedUser

// Define a type for the slice state
interface UserState {
  user: SerializableUser | null; // change to SerializableUser
  loading: boolean;
}

// Define the initial state
const initialState: UserState = {
  user: null,
  loading: false,
};

// Define the slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SerializableUser | null>) => { // change to SerializableUser
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;

// Selectors receive the entire Redux store state as a parameter
export const selectUser = (state: RootState) => state.user.user;  // use RootState instead of { user: UserState }
export const selectLoading = (state: RootState) => state.user.loading;  // use RootState instead of { user: UserState }

export default userSlice.reducer;
