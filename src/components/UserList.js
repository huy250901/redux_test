// components/UserList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../slices/userSlice";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old - {user.phone}
            <button
              onClick={() => {
                const name = prompt("Enter new name:");
                const age = prompt("Enter new age:");
                const phone = prompt("Enter new phone:");
                dispatch(editUser({ id: user.id, name, age, phone }));
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
