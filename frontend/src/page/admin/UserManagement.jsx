import React, { useState } from "react";
import { MoreVertical, Search, AlertCircle, LoaderCircle } from "lucide-react";
import { createUser, getUsers } from "../../api/user";
import { useEffect } from "react";

const UsersManagement = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();
      console.log(res);

      setUsers(res.users);
    };
    fetchUsers();
  }, []);

  // const users = [
  //   {
  //     name: "Florence Shaw",
  //     email: "florencesha@gmail.com",
  //     last: "Jan.02.2023",
  //     added: "Jan.02.2022",
  //   },
  //   {
  //     name: "Jhon Maverick Sins",
  //     email: "jhonmaverick09@gmail.com",
  //     last: "Feb.09.2023",
  //     added: "Feb.09.2022",
  //   },
  //   {
  //     name: "Smith Jones",
  //     email: "smithjones99@gmail.com",
  //     last: "Feb.20.2023",
  //     added: "Feb.20.2022",
  //   },
  //   {
  //     name: "Tremblay Morton Singh",
  //     email: "tremblaymortonsingh@outlook.com",
  //     last: "March.02.2024",
  //     added: "March.02.2023",
  //   },
  // ];

  // -------------------------
  // 🔥 handleChange function
  // -------------------------
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    setErrors((prev) => ({
      ...prev,
      [field]: value.trim() ? "" : `${field} is required`,
    }));
  };

  // -------------------------
  // 🔥 handleSubmit function
  // -------------------------
  const handleSubmit = async () => {
    let newErrors = {};

    setLoading(true);

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // SUCCESS — show in console
    try {
      const res = await createUser(formData);
      setUsers((prev) => [...prev, res.user]);
      setFormData({ username: "", email: "", password: "" });
      setOpen(false);
      setLoading(false);
    } catch (error) {
      console.log("Error creating user:", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          All Users <span className="font-normal text-gray-500">2000</span>
        </h1>

        <div className="flex items-center gap-3">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-xl pl-10 pr-3 py-2.5 bg-gray-50 outline-none focus:ring-2 focus:ring-black/20"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="px-5 py-2.5 bg-black text-white rounded-xl text-sm font-medium shadow-sm hover:bg-black/90 disabled:opacity-50 "
          >
            Add User
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 grid grid-cols-7 text-sm font-medium text-gray-600">
          <div className="col-span-3">User name</div>
          <div className="col-span-2">Access</div>
          <div>Last active</div>
          <div>Date added</div>
        </div>

        <div className="divide-y divide-gray-200">
          {users.map((u, idx) => (
            <div
              key={idx}
              className="px-6 py-4 grid grid-cols-7 items-center hover:bg-gray-50"
            >
              <div className="col-span-3">
                <p className="font-medium text-gray-900">{u.username}</p>
                <p className="text-sm text-gray-500">{u.email}</p>
              </div>

              <div className="col-span-2 flex gap-3">
                <button className="px-4 py-1.5 text-sm rounded-full border border-blue-300 text-blue-600 bg-blue-50 hover:bg-blue-100">
                  Data export
                </button>
                <button className="px-4 py-1.5 text-sm rounded-full border border-purple-300 text-purple-600 bg-purple-50 hover:bg-purple-100">
                  Data import
                </button>
              </div>

              <div className="text-gray-700">{u.last}</div>

              <div className="text-gray-700 flex justify-between items-center">
                {u.added}
                <MoreVertical className="text-gray-500 cursor-pointer ml-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl w-96 p-6 shadow-2xl border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Add New User</h2>

            <div className="space-y-4">
              {/* Username */}
              <div className="relative">
                <label className="text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  placeholder="Enter username"
                  onChange={(e) => handleChange("username", e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 mt-1 bg-gray-50 outline-none transition-all ${
                    errors.username
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-300"
                  }`}
                />
                {errors.username && (
                  <AlertCircle className="absolute right-3 top-[2.9rem] text-red-500 w-5 h-5 animate-slideIn" />
                )}
                {errors.username && (
                  <p className="text-red-600 text-sm mt-2 animate-fadeIn">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  placeholder="enter email address"
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 mt-1 bg-gray-50 outline-none transition-all ${
                    errors.email
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-300"
                  }`}
                />
                {errors.email && (
                  <AlertCircle className="absolute right-3 top-[2.9rem] text-red-500 w-5 h-5 animate-slideIn" />
                )}
                {errors.email && (
                  <p className="text-red-600 text-sm mt-2 animate-fadeIn">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  placeholder="Enter password"
                  onChange={(e) => handleChange("password", e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 mt-1 bg-gray-50 outline-none transition-all ${
                    errors.password
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-300"
                  }`}
                />
                {errors.password && (
                  <AlertCircle className="absolute right-3 top-[2.9rem] text-red-500 w-5 h-5 animate-slideIn" />
                )}
                {errors.password && (
                  <p className="text-red-600 text-sm mt-2 animate-fadeIn">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded-xl hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-black text-white rounded-xl shadow-md hover:bg-black/90"
              >
                {loading ? (
                  <LoaderCircle className="white h-6 w-6 animate-spin" />
                ) : (
                  "Add"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersManagement;
