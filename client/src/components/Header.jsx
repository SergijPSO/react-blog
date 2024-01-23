import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to='/' className='logo'>
        Bulka's blog
      </Link>
      <nav className='navigation'>
        <Link to='/login' className='login'>
          LogIn
        </Link>

        <Link to='/register' className='register'>
          Register
        </Link>
      </nav>
    </header>
  );
}
