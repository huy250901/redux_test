import "./App.css";
import React from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <UserList />
      <UserForm />
    </div>
  );
}

export default App;
