import dotenv from "dotenv";
dotenv.config();
// import "dotenv/config.js";
import express from "express";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

// files and modules imports
import connectDB from "./config/db.js";
import clientRoutes from "./routes/clientRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

//connect to database
connectDB();
app.use(cors());

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: process.env.NODE_ENV === "development",
//   })
// );

app.use("/api", clientRoutes);
app.use("/api", projectRoutes);

app.listen(port, () => console.log(`Server listening on #${port}`));
