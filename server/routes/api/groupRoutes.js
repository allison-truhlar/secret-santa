import { Router } from "express";
import { createGroup } from "../../controllers/groupController.js";

const groupRoutes = Router();

// POST /api/group
groupRoutes.post("/", createGroup);

// Other group-related routes could go here
// For example: GET /api/groups
// router.get("/", listGroups);

export default groupRoutes;
