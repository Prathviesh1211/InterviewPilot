import { create } from "zustand";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from "../api/auth";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  authLoading: true,

  register: async (userData) => {
    set({ loading: true });
    try {
      const data = await registerUser(userData);
      set({
        user: data.user,
        isAuthenticated: true,
        loading: false,
      });
      return data;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
  login: async (credentials) => {
    set({ loading: true });

    try {
      const data = await loginUser(credentials);

      set({
        user: data.data,
        isAuthenticated: true,
        loading: false,
      });

      return data;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
  fetchUser: async () => {
    set({ authLoading: true });

    try {
      const data = await getCurrentUser();

      set({
        user: data.data,
        isAuthenticated: true,
        authLoading: false,
      });

      return data;
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
        authLoading: false,
      });

      throw error;
    }
  },
  logout: async () => {
    set({ loading: true });

    try {
      const data = await logoutUser();

      set({
        user: null,
        isAuthenticated: false,
        loading: false,
      });

      return data;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
}));

export default useAuthStore;
