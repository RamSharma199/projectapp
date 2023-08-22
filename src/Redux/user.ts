import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  name: string;
  phone: number;
  email: string;
}

const initialState: UserState = {
  name: "",
  phone: 0, // Placeholder value, replace with an appropriate number
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers: {
    addlogin: (state, action) => {
      const payload = action.payload;
      return {...state, ...payload }; // Create a new state object with payload values
    },
  },
});

// export type RootState = ReturnType<typeof userSlice.reducer>;
export const {addlogin} = userSlice.actions;
export default userSlice.reducer