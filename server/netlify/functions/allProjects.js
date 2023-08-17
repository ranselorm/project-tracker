const mongoose = require("mongoose");
const Project = require("../server/models/Project"); // Adjust the path accordingly

exports.handler = async (event, context) => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const projects = await Project.find().populate("client");

    mongoose.connection.close();

    return {
      statusCode: 200,
      body: JSON.stringify(projects),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};
