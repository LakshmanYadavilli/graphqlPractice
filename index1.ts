import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/dist/esm/express4";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `type Todo{
        id:ID!
        title:String!
        completed:Boolean!
        userId:ID!
        user:User
      }
      type User{
        id:ID!,
        name:String!,
        username:String!,
        email:String!
  
      },
      type Query{
        getTodos:[Todo],
        getUser(id:ID!):User
      }`,
    resolvers: {
      Todo: {
        user: async (todo) =>
          (
            await axios.get(
              `https://jsonplaceholder.typicode.com/users/${todo.userId}`
            )
          ).data,
      },
      Query: {
        getTodos: async () => {
          const data = (
            await axios.get("https://jsonplaceholder.typicode.com/todos")
          ).data;
          console.log({ data });
          return data;
        },
        getUser: async (parent, { id }) =>
          (await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`))
            .data,
      },
    },
  });
  app.use(bodyParser.json());
  app.use(cors());
  await server.start();
  app.use("/graphql", expressMiddleware(server));
  app.listen(4000, () => console.log("server is running on port:", 4000));
}

startServer();
