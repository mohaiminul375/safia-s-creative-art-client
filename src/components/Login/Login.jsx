import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../firebase/FirebaseProvider";
import { FaCircleXmark } from "react-icons/fa6";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const {loginWithGoogle,loginWithGithub,loginUser}=useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    setError("");
    console.log(data);
    if (password.length < 6) {
      setError("Password must be 6 character or more");
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      setError(
        "Password must contain at least one uppercase letter and one lowercase letter."
      );
      return;
    }
    loginUser(email,password)
    .then((result)=>{
      console.log(result.user)
      toast.success('login Successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      setTimeout(() => {

        navigate(location?.state ? location.state :'/')
      }, 2000);
      
    })
    .catch((error)=>{
      console.error(error.message)
      if(error.message == 'Firebase: Error (auth/invalid-credential).'){
        setError('Incorrect email or password')
      }
      else {
        setError(error.message);
      }
    })
  };

  // google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success('login Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        setTimeout(() => {
  
          navigate(location?.state ? location.state :'/')
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message)
      });
  };
  // github login

  const handleGithubLogin = () => {
    loginWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success('login Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        setTimeout(() => {
  
          navigate(location?.state ? location.state :'/')
        }, 2000);
      })
      .then((error) => {
        console.log(error.message);
        setError(error.message)
      });
  };

  const handleRemoveError = () => {
    setError("");
  };


  return (
    <div className="w-full md:max-w-2xl mx-auto">
      <div className="text-center mt-12">
        <h2 className="text-5xl font-bold">Login Here</h2>
      </div>
      <div className="mt-5 bg-base-200 rounded-lg">
      {error && (
          <p className="text-center text-red-700 font-bold flex items-center justify-center gap-2">
            {error}
            <FaCircleXmark onClick={handleRemoveError} />
          </p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4 py-8">
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
              {...register('email')}
              required
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
              {...register('password')}
              required
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
            <button onClick={handleGoogleLogin} className="flex items-center text-xl border border-[#001220] py-2 bg-[#001220] text-white w-fit px-2 rounded-md">
              <FaGoogle />
              Login in with Google
            </button>
            <button onClick={handleGithubLogin} className="flex items-center text-xl border border-[#001220] py-2 bg-[#001220] text-white w-fit px-2 rounded-md">
              <FaGithub />
              Login in with Github
            </button>
          </div>
        </div>

        <div className="py-5 text-center mb-12">
          <p className="text-xl">
            Are you new here{" "}
            <Link to="/register" className="text-[#001220] underline">
              Please Register
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
