import { Router } from "express";

import createUser from "../controllers/user/createUser.js";
import getUsers from "../controllers/user/getUsers.js";

import authentication from "../middlewares/authentication.js";
import authorization from "../middlewares/authorization.js";

const router = Router();

router.post("/create", authentication, authorization("admin"), createUser);

router.get("/get", authentication, authorization("admin"), getUsers);

export default router;
