import { Router } from "express";
import groupRoutes from "./api/groupRoutes.js";

const apiRoutes = Router();

apiRoutes.use("/groups", groupRoutes);

export default apiRoutes;
