import React, { useState } from "react";
import { AlertCircle, LoaderCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setIsError(
      Object.values(errors).some(
        (errMsg) => errMsg === "" // true agar message hai
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    setLoading(true);

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.companyName)
      newErrors.companyName = "Company name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "The entered email is invalid";
    }

    if (!formData.password) newErrors.password = "Password is required";

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      setLoading(false);
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
      setLoading(false);
    } else {
      try {
        const res = await registerUser(formData);

        newErrors.confirmPassword = res.message;
        if (res.user) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", JSON.stringify(res.user));
          navigate("/admin/dashboard");
        }
      } catch (error) {
        console.error("Registration Error:", error);
        setLoading(false);
      }
    }

    setErrors(newErrors);
    setLoading(false);
  };

  return (
    <div className="min-h-screen h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* LEFT SIDE */}
      <div
        className={`flex-1 flex items-center justify-center bg-white p-6 overflow-y-auto
        `}
      >
        <div className="w-full max-w-md py-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-">Sign Up</h1>
            <p className="text-gray-600 text-base mt-2">
              Enter your details to create an account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NAME FIELD */}
            <div className="relative ">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Write here..."
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all duration-300 ease-out
                  ${
                    errors.name
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-300"
                  }
                `}
              />

              {errors.name && (
                <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-5 h-5 animate-slideIn" />
              )}

              {errors.name && (
                <p className="text-red-600 text-sm mt-2 animate-fadeIn">
                  {errors.name}
                </p>
              )}
            </div>

            {/* COMPANY ANAME */}
            <div className="relative ">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>

              <input
                type="text"
                name="companyName"
                placeholder="Write here..."
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all duration-300 ease-out
                  ${
                    errors.companyName
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-300"
                  }
                `}
              />

              {errors.companyName && (
                <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-5 h-5 animate-slideIn" />
              )}

              {errors.name && (
                <p className="text-red-600 text-sm mt-2 animate-fadeIn">
                  {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL FIELD */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700  mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Write here..."
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all duration-300 ease-out
                  ${
                    errors.email
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-300"
                  }
                `}
              />

              {errors.email && (
                <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-5 h-5 animate-slideIn" />
              )}

              {errors.email && (
                <p className="text-red-600 text-sm mt-2 animate-fadeIn">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD FIELD */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all duration-300 ease-out
                  ${
                    errors.password
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-300"
                  }
                `}
              />

              {errors.password && (
                <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-5 h-5 animate-slideIn" />
              )}

              {errors.password && (
                <p className="text-red-600 text-sm mt-2 animate-fadeIn">
                  {errors.password}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD FIELD */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all duration-300 ease-out
                  ${
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-300"
                  }
                `}
              />

              {errors.confirmPassword && (
                <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-5 h-5 animate-slideIn" />
              )}

              {errors.confirmPassword && (
                <p className="text-red-600 text-sm mt-2 animate-fadeIn">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <LoaderCircle className="white h-7 w-7 animate-spin" />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <div className="my-8 border-t border-gray-300"></div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 hidden lg:flex items-center justify-center overflow-hidden h-full">
        <img
          src="./authCover.svg"
          className="w-full h-full object-cover max-h-screen"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUp;
