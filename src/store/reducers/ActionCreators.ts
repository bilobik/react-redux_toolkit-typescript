import axios from "axios";
import { IUser } from "../../models/IUser";
// import { AppDispatch } from "../store";
// import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       dispatch(userSlice.actions.usersFetching());
//       const response = await axios.get<IUser[]>(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       setTimeout(() => {
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//       }, 1000);
//     } catch (error: any) {
//       dispatch(userSlice.actions.usersFetchingError(error?.message as string));
//     }
//   };
// };

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);