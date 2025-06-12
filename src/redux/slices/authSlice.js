// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const USER_DB_KEY = "users_db";
const AUTH_STATE_KEY = "auth_state";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const getUsersFromStorage = () => {
  const users = localStorage.getItem(USER_DB_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsersToStorage = (users) => {
  localStorage.setItem(USER_DB_KEY, JSON.stringify(users));
};

const getAuthStateFromStorage = () => {
  const state = localStorage.getItem(AUTH_STATE_KEY);
  return state ? JSON.parse(state) : { isAuthenticated: false, user: null, error: null };
};

const saveAuthStateToStorage = (state) => {
  localStorage.setItem(AUTH_STATE_KEY, JSON.stringify(state));
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password }, { rejectWithValue }) => {
    await delay(500);
    const users = getUsersFromStorage();
    if (users.find((u) => u.email === email)) {
      return rejectWithValue("El email ya está registrado");
    }
    const newUser = { email, password };
    users.push(newUser);
    saveUsersToStorage(users);
    return { email };
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    await delay(500);
    const users = getUsersFromStorage();
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      return rejectWithValue("Credenciales inválidas");
    }
    return { email };
  }
);

const initialState = getAuthStateFromStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      saveAuthStateToStorage(state);
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = { email: action.payload.email };
        state.error = null;
        saveAuthStateToStorage(state);
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = { email: action.payload.email };
        state.error = null;
        saveAuthStateToStorage(state);
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
