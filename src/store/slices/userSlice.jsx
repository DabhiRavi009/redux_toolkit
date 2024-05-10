import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // clearAllUser(state, action) {
    //   return [];
    // },
  },
  // extraReducers(builder) {
  //   builder.addCase(userSlice.actions.clearAllUser, (state, action) => {
  //     return [];
  //   });
  // },

  extraReducers(builder) {
    builder.addCase(clearAllUsers, (state, action) => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, clearAllUser } = userSlice.actions;
