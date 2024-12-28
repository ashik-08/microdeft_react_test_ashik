import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import SignIn from "../../assets/SignIn.gif";
import { useAuthDataSubmit } from "../../hooks/useAuthDataSubmit";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { onSubmit } = useAuthDataSubmit(
    "https://react-interview.crd4lc.easypanel.host/api/login"
  );

  return (
    <section className="flex justify-center items-center min-h-screen p-2">
      <div className="flex flex-col-reverse lg:flex-row gap-8 xl:gap-20 items-center">
        <div className="lg:w-1/2">
          <img className="animate-pulse" src={SignIn} alt="signIn-img" />
        </div>
        <div className="lg:w-1/2 p-8 max-w-md text-dark">
          <h1 className="text-3xl font-semibold mb-6">Log In</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1">
              <label>Email Address*</label>
              <input
                type="email"
                placeholder="you@example.com"
                className={`w-full p-2 pl-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-primary-600`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-1 relative pb-6">
              <label>Password*</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className={`w-full p-2 pl-3 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-primary-600`}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^.{8,}$/,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  className="absolute bottom-3 right-3"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <div className="text-right text-sm absolute bottom-0 right-0">
                <Link
                  to="/forgot-password"
                  className="text-gray-500 hover:text-primary-600 font-semibold transition-colors duration-300"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-2.5 w-full bg-primary-600 text-white md:text-lg font-semibold p-2.5 rounded-md hover:bg-primary-700 transition-colors duration-300"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-gray-500 hover:text-primary-600 font-semibold transition-colors duration-300"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
