import Client from "../models/Client.js";
import Project from "../models/Project.js";

//single client
export const GetClient = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    res.status(200).json(client);
  } catch (error) {
    res.status(401).json(error);
  }
};

//all clients
export const AllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    return res.status(201).json(clients);
  } catch (error) {
    res.status(401).json(error);
  }
};

//delete this later
export const ClientsProjects = async (req, res) => {
  try {
    const clientProjects = await Project.find({ client: req.params.id });
    console.log(clientProjects);
    return res.status(201).json(clientProjects);
  } catch (error) {
    res.status(401).json(error);
  }
};

//create client
export const AddClient = async (req, res) => {
  try {
    const client = new Client({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });

    const existingClient = await Client.findOne({ name: req.body.name });
    if (existingClient) {
      return res.status(501).json("Client already exists");
    }
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(401).json(error);
  }
};

//update client
export const UpdateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
        },
      },
      { new: true }
    );
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }
    res.status(201).json(client);
  } catch (error) {
    res.status(401).json(error);
  }
};

//delete client
// export const DeleteClient = async (req, res) => {
//   const projects = await Project.find({ client: req.params.id });
//   console.log(projects);
//   try {
//     // const client = await Client.findByIdAndDelete(req.params.id);
//     // return res.status(201).json(client);
//   } catch (error) {
//     console.error("Error while deleting client:", error);
//     return res.status(500).json({ error: "Internal server error" });
//     // return res.status(401).json(error);
//   }
// };

export const DeleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the client by its ID
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }
    // Delete all projects associated with the client
    await Project.deleteMany({ client: id });

    // Delete the client
    await client.deleteOne();

    return res
      .status(200)
      .json({ message: "Client and associated projects deleted successfully" });
  } catch (error) {
    console.error("Error while deleting client:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
