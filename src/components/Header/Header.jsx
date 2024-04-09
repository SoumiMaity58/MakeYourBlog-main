import React from "react";
import { LogoutBtn, Logo } from "../index.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-slate-900 sticky top-0 px-[109.6px]">
        <nav className="flex">
          <div className="mr-2">
            <Link to="/">
            <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => (
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug)}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-500 hover:text-black rounded-3xl text-xl text-white font-medium'
                  >{item.name}</button>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
    </header>
  );
}

export default Header;