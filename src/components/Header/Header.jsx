import React, { useState } from "react";
import { Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { TfiAlignCenter } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];
  return (
    <header className="py-3 shadow bg-gray-300 sticky top-0 z-50 ">
      <nav className="flex items-center">
        <div className=" flex w-full justify-between items-center  sm:max-w-[200px]">
          <div className="ml-3 sm:ml-5 ">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className=" mr-4  sm:hidden flex items-center justify-center">
            {openMenu ? (
              <button onClick={() => setOpenMenu(false)}>
                <IoMdClose size={20} />
              </button>
            ) : (
              <button>
                <TfiAlignCenter size={24} onClick={() => setOpenMenu(true)} />
              </button>
            )}
          </div>
        </div>
        <ul
          className={` ${
            openMenu
              ? "flex bg-gray-300   w-full flex-col absolute top-12 gap-5 text-center z-50 "
              : "hidden"
          }   sm:flex sm:ml-auto sm:w-auto sm:flex-row sm:static sm:gap-0 mr-4 `}>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name} className="font-semibold">
                <button
                  className="inline-block px-6 py-2 duration-200 hover:bg-blue-600 rounded-full hover:text-white"
                  onClick={() => {
                    setOpenMenu(false);
                    return navigate(item.slug);
                  }}>
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
