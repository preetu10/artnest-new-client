import { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPW, setShowPW] = useState(false);
  return (
    <div>
      <div className="hero bg-base-100 mb-4 py-4">
        <div className="hero-content mx-w-6xl  md:px-20">
          <div className="card  border-2 border-[#b18b5e] px-5 rounded-xl   bg-base-100 w-full md:max-w-md shadow-2xl">
            <div className="flex flex-col mx-auto gap-2 pt-12 pb-0">
              <h1 className="text-3xl font-bold text-center">
                Welcome to 
                <span class=" pl-2 pb-2 bg-gradient-to-r from-[#002323] via-[#002323] to-[#b18b5e] bg-clip-text text-transparent">
                  Art Nest
                </span>
              </h1>
              <p className="text-lg text-center px-8 font-medium text-neutral-600">
                <Marquee>Please Sign Up and Stay Updated!</Marquee>
              </p>
            </div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Email</span>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#B18B5E] text-white text-lg btn-ghost">
                  Sign Up
                </button>
                 <div className="divider divide-x-2 py-2">or</div> 
                <button className="btn bg-[#B18B5E] text-white items-center text-lg btn-ghost">
                  <FaGoogle></FaGoogle>Sign Up with Google
                </button>
              </div>
            </form>
            <div className="mb-6 w-full mx-auto">
                <p className="text-center font-base text-base  mb-2 mt-2">
                  Already have an account? <br />
                  Please{" "}
                  <Link to="/login" className="font-bold text-[#B18B5E]">
                    Log In
                  </Link>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SignUp;
