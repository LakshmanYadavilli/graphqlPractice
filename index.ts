import express from "express";
import { resolvers } from "./resolvers";
import { ApolloServer } from "@apollo/server";
import { readFile } from "node:fs/promises";
import { expressMiddleware } from "@apollo/server/express4";
// import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { AppDataSource } from "./AppDataSource";
// import StudentRouter from "./src/routes/teacher.route";
// import TeacherRouter from "./src/routes/teacher.route";
// import StudentRouter from "./src/routes/student.route";
// import TeacherRouter from "./src/routes/teacher.route";
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT;
// const port = 8082;
console.log(process.env.PORT);
app.use(cors());

app.use(bodyParser.json());

app.use(express.json());
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello AP");
// });
// app.use("/teacher", TeacherRouter);

(async () => {
  const typeDefs = await readFile("./schema.graphql", "utf8");
  console.log({ typeDefs }, "yvl");
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  app.use("/graphql", expressMiddleware(apolloServer));
})();

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
    console.log("Data Source has been intialized");
  })
  .catch((e) => {
    console.log({ e: e }, "start");
  });

// app.use("/student", StudentRouter);
// app.use("/teacher", TeacherRouter);
// app.use("/student", StudentRouter);

// startServer();
