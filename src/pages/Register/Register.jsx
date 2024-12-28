import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import SignUp from "../../assets/SignUp.gif";
import { useAuthDataSubmit } from "../../hooks/useAuthDataSubmit";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { onSubmit } = useAuthDataSubmit(
    "https://react-interview.crd4lc.easypanel.host/api/register"
  );

  return (
    <section className="flex justify-center items-center min-h-screen p-2">
      <div className="flex flex-col-reverse lg:flex-row gap-8 xl:gap-20 items-center">
        <div className="lg:w-1/2">
          <img className="animate-pulse" src={SignUp} alt="sign-up-image" />
        </div>
        <div className="lg:w-1/2 p-8 max-w-md text-dark">
          <h1 className="text-3xl font-semibold mb-6">Create Account</h1>
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
            <div className="space-y-1">
              <label>Name*</label>
              <input
                type="text"
                placeholder="Ashikur Rahman"
                className={`w-full p-2 pl-3 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-primary-600`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
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
            </div>
            <div className="inline">
              <p className="text-sm mt-2 text-gray-500 ">
                By signing up, you agree to our{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-500 hover:text-primary-600 font-semibold transition-colors duration-300"
                >
                  Terms and Conditions
                </Link>
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="mt-2.5 w-full bg-primary-600 text-white md:text-lg font-semibold p-2.5 rounded-md hover:bg-primary-700 transition"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-gray-500 hover:text-primary-600 font-semibold transition-colors duration-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
