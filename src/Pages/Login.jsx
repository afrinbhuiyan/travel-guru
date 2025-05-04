import React, { useState, use } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Provider/AuthProvider.jsx";

console.log(motion);

const Login = () => {
  const { signInUser } = use(AuthContext);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:mx-auto sm:w-full sm:max-w-md text-center"
        >
          <h2 className="bebas-neue text-3xl uppercase font-semibold text-gray-900">
            Login
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back! Please enter your details
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg"
        >
          <div className="bg-white py-8 px-6 border border-gray-200 sm:rounded-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className={`block w-full px-3 py-2 border ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    } placeholder-gray-400 focus:outline-none focus:ring-[#F9A51A] focus:border-[#F9A51A] sm:text-sm`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    // value={formData.password}
                    // onChange={handleChange}
                    className={`block w-full px-3 py-2 border ${
                      errors.password ? "border-red-300" : "border-gray-300"
                    } placeholder-gray-400 focus:outline-none focus:ring-[#F9A51A] focus:border-[#F9A51A] sm:text-sm`}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    // checked={formData.rememberMe}
                    // onChange={handleChange}
                    className="h-4 w-4 text-[#F9A51A] focus:ring-[#F9A51A] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-[#F9A51A] hover:text-[#f9981a] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white ${
                    isSubmitting
                      ? "bg-[#f9b44a]"
                      : "bg-[#F9A51A] hover:bg-[#f9981a]"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F9A51A]`}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </motion.button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-[#F9A51A] hover:text-[#f9981a] hover:underline"
                >
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaFacebook className="text-blue-600 h-5 w-5" />
            <span className="ml-2">Facebook</span>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaGoogle className="text-red-500 h-5 w-5" />
            <span className="ml-2">Google</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Login;
