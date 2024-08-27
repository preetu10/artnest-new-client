import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { Link } from "react-router-dom";
const LogIn = () => {
  const [showPW, setShowPW] = useState(false);
  return (
    <div>
      <div className="hero bg-base-100 mb-4 py-4">
        <div className="hero-content gap-0 flex-col lg:flex-row md:px-12">
          <div className="md:w-1/2 text-center md:text-left">
            <img
              src="Picture1.jpg"
              alt=""
              className="md:h-[630px] rounded-l-xl"
            />
          </div>
          <div className="card rounded-r-xl rounded-l-none md:w-1/2 bg-base-100 w-full max-w-md shadow-2xl">
            <div className="flex flex-col mx-auto gap-2 pt-12 pb-0">
              <h1 className="text-3xl font-bold">
                Welcome to 
                <span class=" pl-1 bg-gradient-to-r from-[#002323] via-[#002323] to-[#b18b5e] bg-clip-text text-transparent">
                  Art Nest
                </span>
              </h1>
              <p className="text-lg text-center font-medium text-neutral-600">
                <Marquee className="px-4">Please log in!</Marquee>
              </p>
            </div>
            <form className="card-body">
         
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control  relative">
                <label className="label">
                  <span className="label-text">Enter Password</span>
                </label>
                <input
                  type={showPW ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute top-12 right-5"
                  onClick={() => setShowPW(!showPW)}
                >
                  {showPW ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#B18B5E] text-white text-lg btn-ghost">
                  Log In
                </button>
                <div className="divider divide-x-2 py-2">or</div>
                <button className="btn bg-[#B18B5E] text-white items-center text-lg btn-ghost">
                  <FaGoogle></FaGoogle>Log In with Google
                </button>
              </div>
            </form>
            <div className="mb-6">
          <p className="text-center font-base text-base mb-2 mt-2">
            Do not have an account? Please{" "}
            <Link to="/signup" className="font-bold text-[#B18B5E]">
              Sign Up
            </Link>
          </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
