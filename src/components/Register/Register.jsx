import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full md:max-w-2xl mx-auto">
      <div className="text-center mt-12">
        <h2 className="text-5xl font-bold">Register Here</h2>
      </div>
      <div className="mt-5 bg-base-200 rounded-lg">
        <form className=" space-y-4 py-8">
          <div className="form-control px-5">
            <label className="label">
              <span className="text-lg">Name</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              name=""
              id=""
              placeholder="input your name"
            />
          </div>
          <div className="form-control px-5">
            <label className="label">
              <span className="text-lg">Photo URL</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              name=""
              id=""
              placeholder="input your photo URL"
            />
          </div>
          <div className="form-control px-5">
            <label className="label">
              <span className="text-lg">Email</span>
            </label>
            <input
              className="input input-bordered"
              type="email"
              name=""
              id=""
              placeholder="input your email"
            />
          </div>
          <div className="form-control px-5 relative">
            <label className="label">
              <span className="text-lg">Password</span>
            </label>
            <input
              className="input input-bordered"
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              placeholder="input your password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[64%] right-6 text-xl"
            >
              {showPassword ? (
                <>
                  <FaRegEye
                    data-tooltip-id="hide"
                    data-tooltip-content="hide-Password"
                  />
                  <Tooltip className="" id="hide" />
                </>
              ) : (
                <>
                  <FaRegEyeSlash
                    data-tooltip-id="show"
                    data-tooltip-content="show-Password"
                  />
                  <Tooltip className="text-xl" id="show" />
                </>
              )}
            </span>
          </div>
          <div className="px-5">
            <input
              className="w-full py-2 rounded-full cursor-pointer bg-[#001220] text-white hover:border"
              type="submit"
            />
          </div>
        </form>
        <div className="flex justify-center">
          <div className="space-y-3">
            <button className="flex items-center text-xl border border-[#001220] py-2 bg-[#001220] text-white w-fit px-2 rounded-md">
              <FaGoogle />
              Login in with Google
            </button>
            <button className="flex items-center text-xl border border-[#001220] py-2 bg-[#001220] text-white w-fit px-2 rounded-md">
              <FaGithub />
              Login in with Github
            </button>
          </div>
        </div>

        <div className="py-5 text-center mb-12">
          <p className="text-xl">
            Already have an account?{" "}
            <Link to="/login" className="text-[#001220] underline">
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
