import User from "../../model/user.js";
import { generateToken } from "../../utils/jwt.js";
import crypto from "crypto";

const register = async (req, res) => {
  const { name, companyName, email, password } = req.body;

  if (!name || !companyName || !email || !password) {
    return res.status(400).json({ message: "All field are required" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const randomId = crypto.randomBytes(3).toString("hex");
    const username = `admin-${randomId}`;

    const user = await User.create({
      name,
      username,
      companyName,
      email,
      password,
      role: "admin",
    });

    return res.status(201).json({
      message: "User registered successfully. ",
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        companyName: user.companyName,
        email: user.email,
        role: user.role,
      },
      token: generateToken({ userId: user._id, role: user.role }),
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export default register;
