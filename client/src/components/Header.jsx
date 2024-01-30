import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {
  const { setUserinfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserinfo(userInfo);
      });
    });
  }, [setUserinfo]);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserinfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to='/' className='logo'>
        Bulka's blog
      </Link>
      <nav className='navigation'>
        {username && (
          <>
            <Link to='/create'>Create new post</Link>
            <span onClick={logout}>LogOut</span>
          </>
        )}
        {!username && (
          <>
            <Link to='/login' className='login'>
              LogIn
            </Link>
            <Link to='/register' className='register'>
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
