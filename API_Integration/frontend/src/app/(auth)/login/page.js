"use client"
import React, { useState } from "react";
import {useRouter} from 'next/navigation'
import axios from 'axios'
import Cookies from "js-cookie"

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitHandler = async(e)=>{
    e.preventDefault();
    let payload={
      email,
      password
    }
      let res =  await axios.post("http://localhost:4000/auth/login",payload);
        if(res.status==200){
            //setting cookie "token" for 7 day
            cookies.set("token",res.data.token,{expires:7});
          router.push("/");
        }
  }

// const submitHandler = async (e) => {
//   e.preventDefault();
//   const payload = {email, password };

//   try {
//     const res = await axios.post("http://localhost:4000/signup", payload);
//     if (res.status === 201) {
//       router.push("/login");
//     }
//   } catch (err) {
//     console.error("Signup failed:", err.response?.data || err.message);
//   }
// };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          LogIn
        </h1>
        <form  onSubmit={submitHandler} className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 active:scale-95 transition-transform"
          >
            LogIn
          </button>
        </form>

        {/* Extra text */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
