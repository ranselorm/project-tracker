import express from "express";
const router = express.Router();
import {
  GetClient,
  AllClients,
  ClientsProjects,
  AddClient,
  UpdateClient,
  DeleteClient,
} from "../controllers/clientController.js";

//get a single client
router.get("/clients/:id", GetClient);

//get all client
router.get("/clients/", AllClients);
//get all client
router.get("/clientProjects/:id", ClientsProjects);

//create a clients
router.post("/clients", AddClient);

//update a client
router.put("/clients/:id", UpdateClient);

//delete a client
router.delete("/clients/:id", DeleteClient);

export default router;
