import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../models/user";
const Parse = require('parse/dist/parse.min.js');

interface AccountState {
  user: User | null;
  loading: boolean;
  error: any;
}

const initialState: AccountState = {
  user: null,
  loading: false,
  error: null,
};

const PARSE_APPLICATION_ID = "realn";
const PARSE_HOST_URL = "http://37.187.155.8:1337/parse/";
const PARSE_JAVASCRIPT_KEY = "realn";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export const login = createAsyncThunk(
  "account/login",
  async ({ email, password }: any, thunkAPI) => {
    try {
      const user = await Parse.User.logIn(email, password);
      alert(`Success! User ${user.get('username')} has successfully signed in!`);
      console.log(user)
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload)
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default accountSlice.reducer;
