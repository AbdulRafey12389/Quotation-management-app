import API from "./axios";

export async function createUser(formData) {
  try {
    const response = await API.post("users/create", formData);
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
      error: error?.response?.data?.error || error.message,
    };
  }
}

export async function getUsers() {
  try {
    const response = await API.get("users/get");
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
}
