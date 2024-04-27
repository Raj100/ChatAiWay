"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../lib/features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import supabase from "../supabase";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function page() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const myImages = [
    "/MrByte.png",
    "/Youthful and Energetic Character1.png",
    "/Zippy Zoe.png",
    "/Intellectual and Curious Character1.webp",
    "/Empathetic and Supportive Character2.jpeg",
  ];

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp(
        { email, password },
        { redirectTo: process.env.REACT_APP_CONFIRMATION_REDIRECT_URL }
      );
      if (error) {
        throw error;
      }
      // Automatically login the user after successful signup
      dispatch(loginUser(user));
      console.log("User signed up:", user);
      // Show success toast
      toast.success("Sign up successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Handle successful signup (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Signup error:", error.message);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bgdark bg-black">
      <Navbar />
      <div></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 grow h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-12 sm gap-32">
        <div className="relative flex items-center justify-center ">
        {myImages.map((src, index) => (
                <Image
                key={index}
                className={` rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index * 1}`}
                style={{
                    animation: `rotate 10s linear infinite ${index * 1}s`
                  }}
                  src={src}
                  width={75}
                  height={75}
                  alt={`Small image ${index}`}
                />
            ))}

          <Image
          className="rounded-full z-10 w-48 h-48 sm:w-auto sm:h-auto"
            src="/Empathetic and Supportive Character1.jpeg"
            width={400}
            height={400}
            alt="Large Image"
          />

        </div>

        <div className="max-w-md w-full space-y-8 bg-gray-50 border rounded-lg py-10 px-4">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSignup}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}
