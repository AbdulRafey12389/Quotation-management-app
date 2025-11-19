import User from "../../model/user.js";

const getUsersByAdmin = async (req, res) => {
  try {
    const adminId = req.user._id;

    const users = await User.find({ createdBy: adminId });

    res.status(200).json({
      message: "Users fetched successfully",
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default getUsersByAdmin;
