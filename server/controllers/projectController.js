import Project from "../models/Project.js";

//single project
export const GetProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id).populate("client");
    res.status(200).json(project);
  } catch (error) {
    res.status(401).json(error);
  }
};

//all projects
export const AllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("client");
    return res.status(201).json(projects);
  } catch (error) {
    res.status(401).json(error);
  }
};

//create project
export const AddProject = async (req, res) => {
  try {
    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      client: req.body.client,
    });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(401).json(error);
  }
};

//update project
export const UpdateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
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
    res.status(201).json(project);
  } catch (error) {
    res.status(401).json(error);
  }
};

//delete project
export const DeleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    return res.status(201).json(project);
  } catch (error) {
    return res.status(401).json(error);
  }
};
