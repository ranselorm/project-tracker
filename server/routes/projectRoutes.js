import express from "express";
const router = express.Router();
import {
  GetProject,
  AllProjects,
  AddProject,
  UpdateProject,
  DeleteProject,
} from "../controllers/projectController.js";

//get a single client
router.get("/projects/:id", GetProject);

//get all client
router.get("/projects", AllProjects);

//create a clients
router.post("/projects", AddProject);

//update a client
router.put("/projects/:id", UpdateProject);

//delete a client
router.delete("/projects/:id", DeleteProject);

export default router;
