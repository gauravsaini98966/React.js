import React from "react";
import { useState } from "react";

function Usestate() {
  const [forData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleInput=()=>{


  };
  return (
    <div>
        <label>name</label>
      <input
        type="text"
        autoComplete="off"
        name="username"
        value={forData.username}
        onChange={handleInput}
      />
        <label>email</label>
      <input
        type="email"
        className=""
        name="email"
        autoComplete="off"
        value={forData.email}
        onChange={handleInput}
      />
          <label>password</label>
      <input
        type="password"
        name="password"
        autoComplete="off"
        value={forData.password}
        onChange={handleInput}
      />
  <label>confirm password</label>
      <input
        type="password"
        name="password"
        autoComplete="off"
        value={forData.confirm_password}
        onChange={handleInput}
      />
    </div>
  );
}

export default Usestate;
