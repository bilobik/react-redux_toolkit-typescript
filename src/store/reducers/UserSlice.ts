import { IUser } from "./../../models/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";
interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  error: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // usersFetching(state) {
    //     state.isLoading = true;
    //     state.error = null;
    // },
    // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //     state.isLoading = false;
    //     state.users = action.payload;
    // },
    // usersFetchingError(state, action: PayloadAction<string>) {
    //     state.isLoading = false;
    //     state.error = action.payload;
    // },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
        state.isLoading = false;
        state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
