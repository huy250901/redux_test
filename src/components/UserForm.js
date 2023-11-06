// components/UserForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.age && formData.phone) {
      dispatch(addUser({ ...formData, id: Date.now() }));
      setFormData({ name: "", age: "", phone: "" });
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default UserForm;
