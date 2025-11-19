import React, { useState } from "react";
import { AlertCircle, LoaderCircle } from "lucide-react";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState("user");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    setLoading(true);

    if (!email) {
      newErrors.email = "Email Address is required";
    } else if (!email.includes("@")) {
      newErrors.email = "The entered email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else {
      try {
        const res = await loginUser({ email, password, role: loginType });
        newErrors.password = res.message;
        if (res.user) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", JSON.stringify(res.user));
          if (res.user.role === "admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/quotation");
          }
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }

    setErrors(newErrors);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SIDE */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Log in</h1>
            <p className="text-gray-600 text-base">
              Enter your email and password to{" "}
              {loginType === "admin" ? "as admin " : ""}log in.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* EMAIL FIELD */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" });
                }}
                placeholder="Write here..."
                className={`w-full px-4 py-2 border rounded-lg outline-none 
  transition-all duration-300 ease-out 
  ${
    errors.email
      ? "border-red-500 focus:border-red-600"
      : "border-gray-300 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-300"
  }
`}
              />

              {/* ERROR ICON - smooth slide in */}
              {errors.email && (
                <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-5 h-5 animate-slideIn animate-slideIn" />
              )}

              {/* ERROR MESSAGE */}
              {errors.email && (
                <p className="text-red-600 text-sm mt-2  animate-fadeIn">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD FIELD */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: "" });
                }}
                placeholder="Enter password"
                className={`w-full px-4 py-2 border rounded-lg outline-none 
  transition-all duration-300 ease-out 
  ${
    errors.password
      ? "border-red-500 focus:border-red-600"
      : "border-gray-300 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-300"
  }
`}
              />

              {/* ERROR ICON */}
              {errors.password && (
                <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-5 h-5 animate-slideIn" />
              )}

              {/* ERROR MESSAGE */}
              {errors.password && (
                <p className="text-red-600 text-sm mt-2 animate-fadeIn">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-opacity"
              >
                Forgot password?
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setLoginType("user")}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium border transition-all
                    ${
                      loginType === "user"
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "bg-gray-100 text-gray-800 border-gray-300"
                    }`}
                >
                  Login as user
                </button>

                <button
                  type="button"
                  onClick={() => setLoginType("admin")}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium border transition-all
                    ${
                      loginType === "admin"
                        ? "bg-blue-500 text-white border-blue-500 shadow-md"
                        : "bg-gray-100 text-gray-800 border-gray-300"
                    }`}
                >
                  Login as admin
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <LoaderCircle className="white h-7 w-7 animate-spin" />
                ) : (
                  "Log In"
                )}
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Don’t have an account?{" "}
                  <a
                    href="/signup"
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </form>
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

export default LoginPage;
