import React, { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration successfull");
    } else {
      alert("Registration failed.");
    }
    console.log(response);
  }

  return (
    <form className='form-register' onSubmit={register}>
      <h1 className='form-register_title'>Register</h1>
      <input
        className='form-register_input'
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='form-register_input'
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='form-register_button'>Register</button>
    </form>
  );
}
