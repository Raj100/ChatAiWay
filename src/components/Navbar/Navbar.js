"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { useAppSelector } from '../../lib/hooks';
import './Navbar.css';

const Navbar = () => {
  let [menu, setMenu] = useState(false);
  const user = useAppSelector(state => state.auth.user);

  return (
    <header className="h-[70px] w-full bg-black flex justify-between items-center px-2 lg:px-10">
      <div className="text-white flex space-x-2">
        {/* <Image src="" alt="" width={10} height={10}/> */}
        {/* <div
          className="text-white cursor-pointer"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <i className={`fa-solid text-xl ${menu ? "fa-xmark" : "fa-bars"} `}></i>
        </div> */}
        <Link href="/">
          <h1>LOgo</h1>
        </Link>
      </div>
      {/* <SideMenu isOpen={menu}></SideMenu> */}

      
      {user ? (
        <div className="ml-4 flex items-center">
          <span className="text-white">{user.name}</span>
        </div>
      ) : (
        <div className="text-white space-x-2 ">
          <Link href="Login">
            <button className="rounded-lg border p-2">Sign In</button>
          </Link>
          <Link href="Signup">
            <button className="rounded-lg border p-2">Sign Up</button>{" "}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
