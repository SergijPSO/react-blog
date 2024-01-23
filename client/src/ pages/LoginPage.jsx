import React from "react";

export default function LoginPage() {
  return (
    <form className='form-login' action=''>
      <h1 className='form-login_title'>Login</h1>
      <input className='form-login_input' type='text' placeholder='username' />
      <input
        className='form-login_input'
        type='password'
        placeholder='password'
      />
      <button className='form-login_button'>Login</button>
    </form>
  );
}
