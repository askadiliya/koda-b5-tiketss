import React from "react";
import logo from "../assets/logo.svg";

function SignIn() {
  return (
    <>
      <div
        className="bg-[url('/src/assets/bg.svg')] min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
      >
        <img src={logo} alt=""/>
        <form
          className="
          bg-white w-full max-w-sm
          md:max-w-md
          lg:max-w-lg
          rounded-xl shadow-lg
          p-6 md:p-8
        "
        >
          <h2 className="text-start text-lg font-semibold">Welcome Back 👋</h2>
          <p className="text-start text-sm text-gray-500 mb-6">
            Sign in with your data that you entered during your registration
          </p>

          <div className="mb-4">
            <label className="text-sm font-medium block mb-1 text-start">Email</label>
            <input
              type="email"
              placeholder="Write your email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-2">
            <label className="text-sm font-medium block mb-1 text-start">Password</label>
            <input
              type="password"
              placeholder="Write your password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> 

          <div className="text-right mb-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-400">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="border rounded-lg p-2 w-12 flex justify-center hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5"
              />
            </button>

            <button
              type="button"
              className="border rounded-lg p-2 w-12 flex justify-center hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="w-5"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
