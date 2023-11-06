// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, age, phone } = action.payload;
      const userToEdit = state.find((user) => user.id === id);
      if (userToEdit) {
        userToEdit.name = name;
        userToEdit.age = age;
        userToEdit.phone = phone;
      }
    },
  },
});

export const { addUser, editUser } = userSlice.actions;
export default userSlice.reducer;
