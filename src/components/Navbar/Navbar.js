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

      <div className="hidden md:block space-x-2">
        <select className="p-2 rounded-lg">
          <option value="Models">Models</option>
          <option value="Images">Images</option>
          <option value="Articles">Articles</option>
          <option value="Tutorials">Tutorials</option>
          <option value="Projects">Projects</option>
          <option value="Challenges">Challenges</option>
          <option value="Courses">Courses</option>
          <option value="Events">Events</option>
          <option value="Jobs">Jobs</option>
          <option value="Freelancers">Freelancers</option>
          <option value="Companies">Companies</option>
          <option value="Forums">Forums</option>
          <option value="Groups">Groups</option>
          <option value="Communities">Communities</option>
          <option value="Marketplaces">Marketplaces</option>
          <option value="Tools">Tools</option>
          <option value="Services">Services</option>
          <option value="Products">Products</option>
          <option value="Courses">Courses</option>
          <option value="Books">Books</option>
          <option value="Podcasts">Podcasts</option>
          <option value="Videos">Videos</option>
          <option value="Music">Music</option>
          <option value="Art">Art</option>
          <option value="Games">Games</option>
          <option value="Apps">Apps</option>
          <option value="Software">Software</option>
          <option value="Hardware">Hardware</option>
          <option value="Collections">Collections</option>
          <option value="Bounties">Bounties</option>
        </select>
        <input
          className="p-2 rounded-lg border border-[0.2px] focus:"
          type="text"
          placeholder="search"
        />
      </div>
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
