import React from "react";

export default function RegisterPage() {
  return (
    <form className='form-register' action=''>
      <h1 className='form-lregister_title'>Register</h1>
      <input
        className='form-register_input'
        type='text'
        placeholder='username'
      />
      <input
        className='form-register_input'
        type='password'
        placeholder='password'
      />
      <button className='form-register_button'>Register</button>
    </form>
  );
}
