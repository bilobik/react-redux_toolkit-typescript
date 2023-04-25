import { fetchUsers } from "./ActionCreators";
import { UserState, userSlice } from "./UserSlice";
import { IUser } from "../../models/IUser";
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("test User reduces", () => {

  const initialState: UserState = {
    users: [],
    error: null,
    isLoading: false,
  };

  test("sets loading true when fetchUsers is pending", () => {
    const resp: IUser[] = [];
    mockedAxios.get.mockResolvedValue(resp);

    const action = { type: fetchUsers.pending.type };
    const reducer = userSlice.reducer;
    const state = reducer(initialState, action);

    expect(state.isLoading).toEqual(true);
  });
});
